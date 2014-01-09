from django.db import models

## Stores the information of signed up users or users who requested an invite.
#
#  The structure of django app Users in relations to the entire project
#  is illustrated in the diagram below:
#  <p>
#  <img src = doc-files/backend_overview.png><br>
#
#  @author Victor Fei
#  @copyright 2013 ellaspark.

## Stores the information of signed up users or users who requested an invite.
#  
class User(models.Model):
    # using u_id as the primary key.
    u_id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=765, blank=True)
    lastname = models.CharField(max_length=765, blank=True)
    password = models.CharField(max_length=765)
    # refering to the new implementation of password hasing in MySQL. 
    # TODO:find out if this is actually used
    new_password_format = models.BooleanField(default=True)
    email = models.CharField(max_length=765, blank=True)
    occupation = models.CharField(max_length=100, null=True, blank=True)
    # currently set to 2000 characters.
    dreams = models.CharField(max_length=2000, null=True, blank=True)
    # the user has to request an invite initially to sign up,
    # we have to grant the user the request to be registered.
    invite_request_granted = models.BooleanField(default=False)
    
    # Right now we are not implementing the following data, but we'll later on.
    #birthday = models.DateField(null=True, blank=True)
    #school_year = models.CharField(max_length=765, blank=True)
    #gender = models.CharField(max_length=18, blank=True)
    #profile_pic = models.CharField(max_length=765, blank=True)
    #is_cloudinary_pic = models.BooleanField(default=False)
    #fb_id = models.CharField(max_length=765, blank=True)
    #fb_oauth = models.CharField(max_length=1000, blank=True)
    #phone_num = models.CharField(max_length=765, blank=True)
    #verified_phone_number = models.CharField(max_length=765, blank=True)
    #confirmcode = models.CharField(max_length=765, blank=True)
    #status = models.CharField(max_length=765, blank=True)
    #favorites = models.ManyToManyField('listings.Listing', blank=True, related_name='favorites')
    #stripe = models.CharField(max_length=765, blank=True)
    #rating = models.IntegerField(null=True, blank=True)
    #b_notification = models.CharField(max_length=765, blank=True)
    #l_notification = models.CharField(max_length=765, blank=True)
    #address = models.CharField(max_length=765, blank=True)
    #city = models.CharField(max_length=765, blank=True)
    #state = models.CharField(max_length=6, blank=True)
    #zip = models.CharField(max_length=15, blank=True)
    #exp_month = models.CharField(max_length=6, blank=True)
    #exp_year = models.CharField(max_length=12, blank=True)
    #last4 = models.CharField(max_length=12, blank=True)
    #c_type = models.CharField(max_length=765, blank=True)
    #user_type = models.CharField(max_length=10, blank=True)
    #school = models.CharField(max_length=100, null=True, blank=True)
    #major = models.CharField(max_length=100, null=True, blank=True)
    #is_employed = models.BooleanField(default=False)
    
