from django.conf.urls.defaults import *

## Coordinates URL connections for module users
#  
#  @author Victor Fei
#  @copyright 2013 ellaspark.

urlpatterns = patterns('users.views',
    url(r'^invite_request$', 'invite_request')
    

)