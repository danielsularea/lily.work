(function ($, MyObj, undefined) {
  var obj = MyObj;

  var c = obj.settings = {
    navbar:         '.navbar',
    project:        '#works .project',
    project_left:   '#work-detail .project__images', 
    project_right:  '#work-detail .project__detail'
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

  var $project_left = $(c.project_left);
  var $project_right = $(c.project_right);
  var $project_right_inner = $(c.project_right + ' > div');
  var handleProjectScroll = obj.handleProjectScroll = function() {
                              var plh = $project_left.outerHeight(),
                                  prw = $project_right.outerWidth(),
                                  wh = $(window).height(),
                                  scrollbottom = $(window).scrollTop() + wh;

                              var prih = $project_right_inner.outerHeight();
                              var offset = (100 + prih) - wh;

                              $project_right.css('minHeight', plh);

                              if (prih > wh) {
                                if (scrollbottom > (100 + prih)) {
                                  $project_right_inner.css({'width': prw,
                                                            'margin-top': 0-offset,
                                                            'position': 'fixed'
                                                          });
                                } else {
                                  $project_right_inner.css({'margin-top': 0,
                                                            'position': 'absolute'
                                                          });
                                }
                              } else {
                                $project_right_inner.css({'width': prw,
                                                          'position': 'fixed'
                                                        });
                              }
                            };

  obj.init                = function(){
                              setProjectHeight();
                              setActivePage();
                              handleProjectScroll();

                              _bindEvents();
                            };

  function _bindEvents() {
    $(window).on('resize', _handleWindowResize);
    $(window).bind('scroll', _handleWindowScroll);

    // Make sure that all clicked links that link to your internal website
    // don't just reload the page but execute a History.pushState call
    var siteUrl = 'http://'+(document.location.hostname||document.location.host);
    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', 'click', _handleDelegate);

    // Catch all History stateChange events
    History.Adapter.bind(window, 'statechange', _handleRedirect);
  }

  function _handleWindowResize(e) {
    setProjectHeight();
  }

  function _handleWindowScroll(e) {
    handleProjectScroll();
  }

  function _handleDelegate(e) {
    e.preventDefault();
    History.pushState({}, '', this.pathname);
  }

  function _handleRedirect(e) {
    var State = History.getState();

    // Load the new state's URL via an Ajax Call
    $.get(State.url, function(data){
        document.title = data.match(/<title>(.*?)<\/title>/)[1];
        $('.content').parent().html($(data).find('.content'));

        // If you're using Google analytics, make sure the pageview is registered!
        ga('send', 'pageview', {
          'page': State.url,
          'title': document.title
        });

        obj.init();
    });
  }

  obj.init();

}(jQuery, window.Main || {}));