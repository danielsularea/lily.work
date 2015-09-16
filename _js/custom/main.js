(function ($, MyObj, undefined) {
  var obj = MyObj;

  var conf = obj.settings = {
    navbar:         '.navbar',
    project:        '#works .project',
    project_inner:  '#work-detail .project__detail > div',
    project_left:   '#work-detail .project__images',
    project_right:  '#work-detail .project__detail',
    ajax_content:   '.content',
    loading_bar:    '.loading__bar',
    hasTransitions: false,
    animating:      false
  };

  var $navbar = $(conf.navbar);
  var nh = $navbar.outerHeight();
  var setDimensions       = obj.setDimensions = function() {
                              $(conf.project).each(function() {
                                var result = _getProjectBeforeContent(this);
                                var flag = result[0];
                                var h = result[1];

                                if (flag) {
                                  $(this).css('height', $(window).height() - nh);
                                } else {
                                  $(this).css('height', h);
                                }
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

  var callPrism           = obj.callPrism = function() {
                              if ($('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code').length) {
                                Prism.highlightAll();
                              }
                            };

  var transitionSupported = obj.transitionSupported = function() {
                              conf.hasTransitions = $('html').hasClass('csstransitions');
                            };

  obj.init                = function(){
                              _initialize();
                              _bindEvents();
                            };

  function _initialize() {
    transitionSupported();
    setDimensions();
    setActivePage();
    callPrism();
  }

  function _bindEvents() {
    $(window).on('resize', _handleWindowResize);
    $(window).bind('scroll', _handleWindowScroll);

    // Ajax handlers
    // $(document).delegate('a', 'click', _handleDelegate);
    $('a').on('click', _handleDelegate);
    History.Adapter.bind(window, 'statechange', _handleStateChange);
  }

  function _handleWindowResize(e) {
    setDimensions();
    _handleProjectScroll();
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
        if (!conf.animating) {
          History.pushState({}, '', this.pathname);
          _handleRedirect(this.href);
        }
      }
    } else {
      window.open(this.href);
    }
  }

  function _handleRedirect(url) {
    conf.animating = true;
    $('body').addClass('loading');
    $(conf.loading_bar).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      _loadContent(url);
      $(conf.loading_bar).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });

    if(!conf.hasTransitions) _loadContent(url);
  }

  function _loadContent(url) {
    url = ('' === url) ? 'index.html' : url;
    var section = $(conf.ajax_content).parent();

    $.get(url, function(data) {
      document.title = data.match(/<title>(.*?)<\/title>/)[1];
    });
      
    section.load(url + ' ' + conf.ajax_content, function(event){
      // $('.content').parent().html(section);
      var delay = (conf.hasTransitions) ? 1500 : 0;

      setTimeout(function() {
        $(window).scrollTop(0,0);
        $('body').removeClass('loading');

        $(conf.loading_bar).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          conf.animating = false;
          $(conf.loading_bar).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if (!conf.hasTransitions) conf.animating = false;
      }, delay);

      obj.init();
    });
  }

  function _handleStateChange(e) {
    var State = History.getState();
    if (!conf.animating) _handleRedirect(State.url);
  }

  function _getProjectBeforeContent(element) {
    var str = window.getComputedStyle(element, ':before').getPropertyValue('content').replace(/\"/g, '');
    var i = str.indexOf('_');
    var flag = str.substring(0, i);
    var h = str.substring(i+1);
    if (flag.length > 0) {
      return [true, h];
    } else {
      return [false, h];
    }
  }

  function _handleProjectScroll() {
    var result = _getProjectBeforeContent(document.querySelector(conf.project_right));
    var flag = result[0];

    var inner = $(conf.project_inner),
        pl = $(conf.project_left),
        pr = $(conf.project_right);

    var plh = $(pl).outerHeight(),
        prw = $(pr).outerWidth(),
        prih = $(inner).outerHeight();

    var wh = $(window).height(),
        scrollbottom = $(window).scrollTop() + wh,
        offset = (100 + prih) - wh;

    if (flag) {
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
    } else {
      $(inner).css({'margin-top': 0,
                    'position': 'static',
                    'width': 'auto'
                  });
    }
  }

  $(document).ready(function() {
    obj.init();
  });

  return obj;

}(jQuery, window.Main || {}));