(function ($, MyObj, undefined) {
  var obj = MyObj;

  var c = obj.settings = {
    navbar:         '.navbar',
    project:        '#works .project',
  };

  var $navbar = $(c.navbar);
  var nh = $navbar.outerHeight();
  var setProjectHeight    = obj.setProjectHeight = function() {
                              $(c.project).each(function() {
                                $(this).css('height', $(window).height() - nh);
                              });
                            };

  var setActivePage       = obj.setActivePage = function() {
                              var id = $('.content').attr('id');

                              if (id.length > 0) {
                                $('.navbar__menu a').each(function() {
                                  $(this).removeClass('active');
                                });

                                $('a#' + id).addClass('active');
                              } 
                            };

  var handleProjectScroll = obj.handleProjectScroll = function() {
                              var $inner = $('#work-detail .project__detail > div'),
                                  $pl = $('#work-detail .project__images'),
                                  $pr = $('#work-detail .project__detail');

                              var plh = $pl.outerHeight(),
                                  prw = $pr.outerWidth(),
                                  prih = $inner.outerHeight();

                              var wh = $(window).height(),
                                  scrollbottom = $(window).scrollTop() + wh,
                                  offset = (100 + prih) - wh;

                              $pr.css('minHeight', plh);

                              if (prih > wh) {
                                if (scrollbottom > (100 + prih)) {
                                  $inner.css({'width': prw,
                                              'margin-top': 0-offset,
                                              'position': 'fixed'
                                            });
                                } else {
                                  $inner.css({'margin-top': 0,
                                              'position': 'absolute'
                                            });
                                }
                              } else {
                                $inner.css({'width': prw,
                                            'position': 'fixed'
                                          });
                              }
                            };

  obj.init                = function(){
                              _initialize();
                              _bindEvents();
                            };

  function _initialize() {
    setProjectHeight();
    setActivePage();
    handleProjectScroll();
  }

  function _bindEvents() {
    $(window).on('resize', _handleWindowResize);
    $(window).bind('scroll', _handleWindowScroll);

    // Make sure that all clicked links that link to your internal website
    // don't just reload the page but execute a History.pushState call
    // var siteUrl = 'http://'+(document.location.hostname||document.location.host);
    $(document).delegate('a', 'click', _handleDelegate);

    // Catch all History stateChange events
    History.Adapter.bind(window, 'statechange', _handleRedirect);
  }

  function _handleWindowResize(e) {
    setProjectHeight();
    handleProjectScroll();
  }

  function _handleWindowScroll(e) {
    handleProjectScroll();
  }

  function _handleDelegate(e) {
    var siteUrl = document.location.hostname||document.location.host;
    e.preventDefault();
    
    if (this.href.includes(siteUrl)) {
      if (this.pathname.includes('pdf')) {
        window.open(this.href);
      } else {
        History.pushState({}, '', this.pathname);
      }
    } else {
      window.open(this.href);
    }
  }

  function _handleRedirect(e) {
    var State = History.getState();

    // Load the new state's URL via an Ajax Call
    $.get(State.url, function(data){
        document.title = data.match(/<title>(.*?)<\/title>/)[1];
        window.scrollTo(0,0);
        $('.content').parent().html($(data).find('.content'));

        // If you're using Google analytics, make sure the pageview is registered!
        ga('send', 'pageview', {
          'page': State.url,
          'title': document.title
        });

        _initialize();
    });
  }

  obj.init();

}(jQuery, window.Main || {}));