from django.conf.urls import patterns, include, url
from lillian import settings
from views import *

## Coordinates the overall URL connections
#
# -------------------------------------------------------------------
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # home page
    url(r'^$', home),
    url(r'^about$', about),
    url(r'^work$', work),
    url(r'^writing$', writing),
    url(r'^contact$', contact),
    url(r'^writing/1$', writing1),
    url(r'^writing/2$', writing2),
    url(r'^writing/3$', writing3),
    url(r'^writing/4$', writing4),
    url(r'^work/fiberspark$', fiberspark),
    url(r'^work/dreamcatcher$', dreamcatcher),
    url(r'^work/cbr$', cbr),
    url(r'^work/cbr/1$', cbr1),
    # static files for all pages
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', 
        {'document_root': settings.STATIC_ROOT}),
    
    # ------------------------------------------------------------------
    # Examples:
    # url(r'^$', 'lillian.views.home', name='home'),
    # url(r'^lillian/', include('lillian.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    # ------------------------------------------------------------------
)
