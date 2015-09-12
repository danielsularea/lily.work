(function ($, MyObj, undefined) {
  var obj = MyObj;

  var c = obj.settings = {
    navbar:         '.navbar',
    project:        '#works .project',
    project_inner:  '#work-detail .project__detail > div',
    project_left:   '#work-detail .project__images',
    project_right:  '#work-detail .project__detail'
  };

  var $navbar = $(c.navbar);
  var nh = $navbar.outerHeight();
  var setDimensions       = obj.setDimensions = function() {
                              $(c.project).each(function() {
                                $(this).css('height', $(window).height() - nh);
                              });

                              // $(c.project_right).css('minHeight', $(c.project_left).outerHeight());
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

  obj.init                = function(){
                              // setTimeout(function() {
                              //   $('body').addClass('loading');
                              // }, 2000)

                              _initialize();
                              _bindEvents();
                            };

  function _initialize() {
    setDimensions();
    setActivePage();
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
    setDimensions();
  }

  function _handleWindowScroll(e) {
    _handleProjectScroll();
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
    $.ajax({
      url: State.url,
      beforeSend: function() {
        $('body').addClass('loading');
      },
      success: function(data) {
        setTimeout(function() {
          document.title = data.match(/<title>(.*?)<\/title>/)[1];
          window.scrollTo(0,0);
          $('.content').parent().html($(data).find('.content'));

          ga('send', 'pageview', {
            'page': State.url,
            'title': document.title
          });

          obj.init();
        }, 1600);
      },
      complete: function() {
        setTimeout(function() {
          $('body').removeClass('loading');
        }, 1600);
      }
    });
  }

  function _handleProjectScroll() {
    var inner = $(c.project_inner),
        pl = $(c.project_left),
        pr = $(c.project_right);

    var plh = $(pl).outerHeight(),
        prw = $(pr).outerWidth(),
        prih = $(inner).outerHeight();

    var wh = $(window).height(),
        scrollbottom = $(window).scrollTop() + wh,
        offset = (100 + prih) - wh;

    if ((prih + 100) > wh) {
      if (scrollbottom > (100 + prih)) {
        $(inner).css({'width': prw,
                    'margin-top': 0-offset,
                    'position': 'fixed'
                  });
      } else {
        $(inner).css({'margin-top': 0,
                    'position': 'static'
                  });
      }
    } else {
      $(inner).css({'width': prw,
                  'position': 'fixed'
                });
    }
  }

  $(document).ready( function(){ 
    obj.init(); 
  });

  return obj;

}(jQuery, window.Main || {}));