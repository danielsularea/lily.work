;(function(mainObj) {
  'use strict';

  var obj = mainObj;
  var desktopWidth;

  var Classes = obj.settings = {
    fixedBlogHeader:    'js--fixedBlogHeader',
    pageTitlePastFold:  'js--pageTitlePastFold',
  };

  var _initBarba = function() {
    Barba.Pjax.getTransition = function() {
      return Transition;
    };

    var Default = Barba.BaseView.extend({
      namespace: 'default',
      onEnter: function () {},
      onEnterCompleted: function () {
        var headerItems = document.getElementsByClassName('m--header_menu_anchor'),
            pathname = window.location.pathname.replace('index.html', ''),
            pathArr = pathname.split('/'),
            activeAttr = pathArr[1] ? pathArr[1] : 'works';

        for (var i = 0; i < headerItems.length; i++) {
          var curAttr = headerItems[i].dataset.headeritem;

          if (!pathArr[2] && curAttr === activeAttr) {
            headerItems[i].classList.add('active');
          } else {
            headerItems[i].classList.remove('active');
          }
        }
      },
      onLeave: function () {},
      onLeaveCompleted: function () {}
    });

    Default.init();

    document.addEventListener('DOMContentLoaded', function(e) {
      Barba.Pjax.start();
    });

    Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus, container) {
      _setDimensions();
    });
  };

  var _setDesktopWidth = function() {
    var b = window.getComputedStyle(
              document.querySelector('body'), ':before'
            ).getPropertyValue('content')
            .replace('px','')
            .replace('"', '');

    desktopWidth = parseInt(b, 10);
  };

  var _setDimensions = function() {
    _setFixedBlogHeader();
  };

  var _setFixedBlogHeader = function() {
    var fixedBlogHeader = document.getElementsByClassName(Classes.fixedBlogHeader);

    if (fixedBlogHeader[0]) {
      var thisEl = fixedBlogHeader[0],
          parent = thisEl.parentNode;

      if (window.innerWidth >= desktopWidth) {
        thisEl.style.width = parent.offsetWidth + 'px';
        thisEl.style.position = 'fixed';
      } else {
        thisEl.style.width = 'auto';
        thisEl.style.position = 'static';
      }
    }
  };

  var _handlePageTitlePastFold = function() {
    var pageTitleArr = document.getElementsByClassName(Classes.pageTitlePastFold);

    if (!pageTitleArr[0]) {
      console.log('page title not found!');
      return;
    }

    var pageTitle = pageTitleArr[0];

    if (document.body.scrollTop > window.innerHeight) {
      pageTitle.classList.add('visible');
      return;
    }

    pageTitle.classList.remove('visible');
  };

  var _handleWindowResize = function() {
    _setDesktopWidth();
    _setDimensions();
  };

  var _handleWindowScroll = function() {
    // _handlePageTitlePastFold();
  };

  var _bindEvents = function() {
    window.addEventListener("resize", _handleWindowResize);
    document.addEventListener("scroll", _handleWindowScroll);
  };

  obj._init = function() {
    // _initBarba();
    _setDesktopWidth();
    _setDimensions();
    mediumZoom(document.querySelectorAll('[data-action="zoom"]'));
    _bindEvents();
  };

  obj._init();

  return obj;
}(window.Main || {}));