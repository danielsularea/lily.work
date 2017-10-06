;(function(mainObj) {
  'use strict';

  var obj = mainObj;
  var MaxMobileWidth;

  var Selectors = obj.settings = {
    fixedBlogHeader:    'js--fixedBlogHeader',
    pageTitlePastFold:  'js--pageTitlePastFold',
    zoomImages:         '[data-action="zoom"]',
  };

  var _initBarba = function() {
    Barba.Pjax.getTransition = function() {
      return Transition;
    };

    // var Default = Barba.BaseView.extend({
    //   namespace: 'default',
    //   onEnter: function () {},
    //   onEnterCompleted: function () {
    //     var headerItems = document.getElementsByClassName('m--header_menu_anchor'),
    //         pathname = window.location.pathname.replace('index.html', ''),
    //         pathArr = pathname.split('/'),
    //         activeAttr = pathArr[1] ? pathArr[1] : 'works';

    //     for (var i = 0; i < headerItems.length; i++) {
    //       var curAttr = headerItems[i].dataset.headeritem;

    //       if (!pathArr[2] && curAttr === activeAttr) {
    //         headerItems[i].classList.add('active');
    //       } else {
    //         headerItems[i].classList.remove('active');
    //       }
    //     }
    //   },
    //   onLeave: function () {},
    //   onLeaveCompleted: function () {}
    // });

    // Default.init();

    document.addEventListener('DOMContentLoaded', function(e) {
      Barba.Pjax.start();
    });

    Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus, container) {
      _setDimensions();
      _initMediumZoom();
    });
  };

  var _initMediumZoom = function() {
    mediumZoom(document.querySelectorAll(Selectors.zoomImages));
  };

  var _setMaxMobileWidth = function() {
    var b = window.getComputedStyle(
              document.querySelector('body'), ':before'
            ).getPropertyValue('content')
            .replace('px','')
            .replace('"', '');

    MaxMobileWidth = parseInt(b, 10);
  };

  var _setDimensions = function() {
    _setFixedBlogHeader();
  };

  var _setFixedBlogHeader = function() {
    var fixedBlogHeader = document.getElementsByClassName(Selectors.fixedBlogHeader);

    if (fixedBlogHeader[0]) {
      var thisEl = fixedBlogHeader[0],
          parent = thisEl.parentNode;

      if (window.innerWidth >= MaxMobileWidth) {
        thisEl.style.width = parent.offsetWidth + 'px';
        thisEl.style.position = 'fixed';
      } else {
        thisEl.style.width = 'auto';
        thisEl.style.position = 'static';
      }
    }
  };

  var _handlePageTitlePastFold = function() {
    var pageTitleArr = document.getElementsByClassName(Selectors.pageTitlePastFold);

    if (!pageTitleArr[0]) {
      console.log('page title not found!');
      return;
    }

    var pageTitle = pageTitleArr[0];

    if (window.pageYOffset >= window.innerHeight) {
      pageTitle.classList.add('visible');
      return;
    }

    pageTitle.classList.remove('visible');
  };

  var _handleWindowResize = function() {
    _setMaxMobileWidth();
    _setDimensions();
  };

  var _handleWindowScroll = function() {
    _handlePageTitlePastFold();
  };

  var _bindEvents = function() {
    window.addEventListener("resize", _handleWindowResize);
    document.addEventListener("scroll", _handleWindowScroll);
  };

  obj._init = function() {
    _initBarba();
    _setMaxMobileWidth();
    _setDimensions();
    _initMediumZoom();
    _bindEvents();
  };

  obj._init();

  return obj;
}(window.Main || {}));