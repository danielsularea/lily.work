from django.http import HttpResponse
from django.template.loader import get_template
from django.template import Context
from django.template import RequestContext


## @package lillian
#  The view layer of this website. 
#
#  This website implements django's Model-Template-View(MTV) framework. A view
#  requests from the model the information that it needs to generate a display
#  to the user. The view layer is a bridge that access the model and refers to
#  the appropriate templates.
# 
  
## links to home page.
#
#  home page is for user to sign up for an invitation request
#
#  @param {@link HttpRequest}
def home(request):
    t = get_template('home.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def about(request):
    t = get_template('about.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def work(request):
    t = get_template('work.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def writing(request):
    t = get_template('writing.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def contact(request):
    t = get_template('contact.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def writing1(request):
    t = get_template('writing/1.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def writing2(request):
    t = get_template('writing/2.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def writing3(request):
    t = get_template('writing/3.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def writing4(request):
    t = get_template('writing/4.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def fiberspark(request):
    t = get_template('work/fiberspark.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def dreamcatcher(request):
    t = get_template('work/dreamcatcher.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def cbr(request):
    t = get_template('work/cbr.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)

def cbr1(request):
    t = get_template('work/cbr/1.html')
    html = t.render(RequestContext(request))
    return HttpResponse(html)