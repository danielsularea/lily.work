---
title:  Integrating PayPal Chained Payments in Rails
---

Recently, I've noticed a severe lack of tutorials on PayPal API integration. And even if I do end up finding one, it's very [outdated][railscast]{:target="_blank"}. PayPal's documentation itself is alright, but not great, so here's my take.

Disclaimer: I haven't actually deployed yet. All of this stuff is Sandbox mode for now. I'll update once I've successfully moved into production.

## Chained payment
So Chained Payments is a type of [Adaptive Payment][adaptive]{:target="_blank"}, which is a Classic API, not REST. A chained payment itself is essentially a transaction where an amount of money can be split among multiple recipients. Unlike [Mass Payments][mass]{:target="_blank"}, however, this is more geared toward cases where there is one primary receiver (usually the developer), and at least one secondary receiver.

A good usage of this is if you are developing a marketplace and you want to take a cut of the transactions that happen between users on your platform. In this case, you would be the primary receiver so that the buyer only sees that they are paying you and the seller only sees that they are receiving money from you.

## API Credentials
Firstly, you have to upgrade your PayPal account to a Business account. Once you've done that, follow the instruction [here][credentials]{:target="_blank"} to create a set of Classic API credentials. I stuck with a signature set but certificate should work the same.

## SDK
Of course, we could follow the [cURL instructions][curl]{:target="_blank"} but I've found [Adaptive Payment SDK][sdk]{:target="_blank"} to be far simplier to understand. Just add `gem 'paypal-sdk-adaptivepayments'` to your Gemfile and run `bundle`. This will do a basic set up in your directory, including building a `paypal.yml` file in your `config` folder. In that file, update it with your own API credentials. Since we're still testing in Sandbox, you'll need to be using `APP-80W284485P519543T` for your `app_id`. Once your application is approved by PayPal in the [developer portal][developer]{:target="_blank"}, you can get a unique `app_id` to use for production use.

## Example
That's honestly it for the setup. We can then start creating a very simple chained payment. Below, all we do is take a 5% commission from a transaction between the buyer and seller.

``` ruby
def pay
  p = Print.find_by(id: params[:id])
  creator = Creator.find_by(id: p.creator_id)
  price = p.price
  commission = 0.05

  # Build API call
  @api = PayPal::SDK::AdaptivePayments.new
  @pay = @api.build_pay({
    :actionType => "PAY",
    :cancelUrl => "http://localhost:3000/p/#{p.id}",
    :returnUrl => "http://localhost:3000/#{p.path}",
    :currencyCode => "USD",
    :feesPayer => "PRIMARYRECEIVER",
    :ipnNotificationUrl => "http://localhost:3000/paypal/ipn_notify",
    :receiverList => {
      :receiver => [
        {
          :amount => price,
          :email => "facilitator@cornell.edu",
          :primary => true
        },
        {
          :amount => price * (1 - commission),
          :email => "buyer@cornell.edu",
          :primary => false
        }
      ]
    },
    :memo => "Transaction for #{p.name}"
  } || default_api_value)

  # Make API call
  @pay_response = @api.pay(@pay)

  # Check if call was valid, if so, redirect to PayPal payment url
  if @pay_response.success?
    t = Transaction.create(print_id: p.id, seller_id: creator.id, )
    if current_user
      t.update(buyer_id: current_user.id)
    end

    redirect_to @api.payment_url(@pay_response)
  else
    @pay_response.error
    redirect_to "/p/#{p.id}", alert: "Something went wrong. Please contact support."
  end
end
```

## Conclusion
I may write another post sometime in the future on how to handle IPN notifications but for now, this is a pretty basic set up for using PayPal SDKs.

[paypal]: https://developer.paypal.com/docs/classic/api/gs_PayPalAPIs/
[railscast]: http://railscasts.com/episodes/141-paypal-basics
[credentials]: https://developer.paypal.com/docs/classic/api/apiCredentials/#creating-classic-api-credentials
[adaptive]: https://developer.paypal.com/docs/classic/adaptive-payments/integration-guide/APIntro/
[curl]: https://developer.paypal.com/docs/classic/adaptive-payments/ht_ap-basicChainedPayment-curl-etc/
[sdk]: https://github.com/paypal/adaptivepayments-sdk-ruby
[developer]: https://developer.paypal.com/
[mass]: https://developer.paypal.com/docs/classic/mass-pay/integration-guide/MassPayOverview/