---
layout: blogpost
title: I'm Not Even Mad
---

There is a fantastic story I once learned about the history of CAPTCHA that still impresses me to this day.

## A Brief History

In 1997, a small but quickly growing search engine company called AltaVista needed a way to prevent bots from submitting useless URLs to their platform. Exploiting a computer's limited image analytic skills (at least back then), they asked AltaVista users to validate text in a picture in order to prove they were human. However, aware of OCR (optical character recognition) attacks, the team of 5 experimented with various typefaces, backgrounds, type styles and sizes that ultimately became the squiggly texts that are so irrefutably familiar today.

{% include figure.html
  nozoom="true"
  url="/assets/img/captcha/original-captcha.png"
  caption="The original CAPTCHA was a bunch of random letters and numbers"
  alt="The original CAPTCHA" %}

It took a few more years for a second team at Carnegie Mellon in 2003 to perfect the algorithm that generated the distorted texts and coin the system the Completely Automated Public Turing Test to tell Computers and Humans Apart (CAPTCHA).

Then in 2009, another search engine, Google, acquired Carnegie Mellon's algorithm and deployed reCAPTCHA. This system expanded upon the original by asking users to identify *two sets of real words rather than random letters and numbers.*

{% include figure.html
  nozoom="true"
  url="/assets/img/captcha/scannedtext.png"
  caption="The new reCAPTCHA was a set of two real words"
  alt="Google's revamped reCAPTCHA" %}

Why specifically two words? Because the first was to validate the user as human with a word Google already knew the answer to but the second was actually to educate Google what the word was.

Because unbeknownst to the user, both sets of words, although spliced into a single image, came from a collection of scanned texts. Essentially, if the user's input matches the first word, the user is already validated but she is also strung on a little bit longer to contribute the answer for the second.

All of this happening under our noses for two years and Google was able to completely digitized the New York Times archives and Google Books library.

But then, as artificial intelligence became too intelligent (solving even the most distorted text at 99.8% accuracy without human intervention), Google shifted opportunity.

{% include figure.html
  nozoom="true"
  url="/assets/img/captcha/crack-captcha.jpg"
  caption="Artifical intelligence was catching up to the squiggly words"
  alt="Artifical intelligence was catching up to the squiggly words" %}

Now, Google wanted to pinpoint addresses on Google Maps so that directions were painstakingly accurate. So enter Street View and soon photos of house numbers replaced the Google Books words.

{% include figure.html
  nozoom="true"
  url="/assets/img/captcha/streetview.png"
  alt="CAPTCHA using numbers on Street View" %}

And once this venture was finished&mdash;and we know it is because dang, are Google's directions accurate&mdash;they moved on to the next iteration.

Now we're at the latest version of reCAPTCHA, where users are now tasked to help identify objects in images, which obviously is another step towards better computer vision.

{% include figure.html 
  nozoom="true"
  url="/assets/img/captcha/objectid.png"
  alt="CAPTCHA using object identification" %}

## Why I'm Not Mad

Now, if all of that made you a little mad about Google being kind of underhanded, I don't blame you. No one likes to be "tricked" into doing something.

But then I thought about it. Throwing a fit that Google used reCAPTCHA to digitize Google Books and improve Google Maps is like getting mad that the store is charging 2 cents on a 1 cent piece of candy when they're pooling all that money into building a playground next to my house.

And, after 2 years working within the healthcare industry, I've unfortunately adapted a viewpoint that with such a multi-faceted domain, not everybody can win all the time. A designer just has to minimize loss in this sort of situation.

But Google was faced with a three-sided tug-a-war: the needs of websites to protect themselves against malicious bots, the needs of human users to pass through these tests frictionlessly, and the needs of Google to generate profit. And it kicked it all out of the water.

The three-sided solution:
1. Towards the first, Google matched increasingly smarter computer vision with harder challenges, moving from text to object identification.
2. Yet at the same time, the modern tech giant that ultimately toppled AltaVista also made reCAPTCHA significantly easier for humans. According to the [team][google]{:target="_blank"}, "It's much easier to tap photos of cats or turkeys than to tediously type a line of distorted text on your phone." Furthermore, Google analyzes the user's history with CAPTCHAs and weighs how human their behavior is so that they might just bypass the puzzle entirely (called the No CAPTCHA experience).
3. Lastly, of course, Google made major strides in the face of artificial intelligence as a whole, which in turn, I'm sure, made massive profits in numerous business streams.

I mean, not only was I slapped in the face that I was being whiny about a complex domain, I was starstruck as a fellow artificial intelligence designer.

AI does not have simple problems. Just training a machine learning algorithm costs enormous amounts of money and effort and Google managed to do it while benefiting the general public.

Could all this goodwill be a sneaky way to make more money? Sure! But I'm sorry, every company is a business and if you can solve a problem that makes money while doing some good, I can't even be mad.

## Post-Script
And as a final note: one of the founding members on the original Carnegie Mellon team gave a [TEDx talk][TEDxCMU]{:target="_blank"} shortly after the first major success of digitizing the Google Books library and said that he created reCAPTCHA because he felt bad about wasting 10 seconds of people's day without it contributing to something. And so it goes.

[TEDxCMU]: https://www.ted.com/talks/luis_von_ahn_massive_scale_online_collaboration/transcript
[google]: https://security.googleblog.com/2014/12/are-you-robot-introducing-no-captcha.html
[circle]: https://en.wikipedia.org/wiki/The_Circle_(2017_film)
[microverse]: http://rickandmorty.wikia.com/wiki/Microverse