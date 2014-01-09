from django.http import HttpResponse
from users.models import User
from django.template import RequestContext, loader

## Handles user activities such as invitation, log in, account management.
#   
#  The structure of django app Users in relations to the entire project
#  is illustrated in the diagram below:
#  <p>
#  <img src = doc-files/backend_overview.png><br>
#
#  @author Victor Fei
#  @copyright 2013 ellaspark.
# -----------------------------------------------------------------
# TODO: look into password and data ENCRYPTION methods
# -----------------------------------------------------------------

# A set of field that should never be sent in a response to the user.
# Don't move this to constants.py, it should be visible here. 
# So future programmers know to add things to it when working on users
SENSITIVE_FIELDS = set([
    'password',
    'new_password_format',
    'stripe'
])

## Handles the webpage when the user requests for an invite.
#  
#  So far, it only contains the simple functionality of storing user
#  information into the database. 
#  
#  @param request HttpRequest
#  @return {@link HttpResponse} of the invite request page, which contains a 
#          message telling a user that we will look into the invitation request
def invite_request(request):
    # below should be used to redirect to a page for refilling.
    if ('firstname' not in request.POST 
         or 'lastname' not in request.POST 
         or 'email' not in request.POST):
        raise Http404
    
    # TODO: add the case when user has already signed up a request
    
    u = User(firstname = request.POST['firstname'],
                lastname = request.POST['lastname'],
                email = request.POST['email'],
                occupation = request.POST['occupation'],
                dreams = request.POST['dreams'])
    u.save()
    
    t = loader.get_template("invite_request.html")
    c = RequestContext(request, {})
    
    return HttpResponse(t.render(c))