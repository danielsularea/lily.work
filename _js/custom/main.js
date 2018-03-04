;(function(mainObj) {
  'use strict';

  var obj = mainObj;
  var MaxMobileWidth;

  var Selectors = obj.settings = {
    headerScroll:       'js--headerScroll',
    portrait:           'l--home_portrait',
    fixedSidebar:       'js--fixedSidebar',
    workMenu:           'm--workMenu',
    // pageTitlePastFold:  'js--pageTitlePastFold',
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
    
  };

  var _handleHeaderScroll = function() {
    var headerArr = document.getElementsByClassName(Selectors.headerScroll);

    if (!headerArr[0]) { return; }

    var header = headerArr[0],
        scrollTop = window.pageYOffset || 
                    document.documentElement.scrollTop;

    if (scrollTop > 0) {
      header.classList.add('scrolled');
      return;
    }

    header.classList.remove('scrolled');
  };

  // var _handlePortraitScroll = function() {
  //   var thisEl = document.getElementsByClassName(Selectors.portrait)[0],
  //       scrollTop = window.pageYOffset;

  //   scrollTop = (scrollTop <= 0) 1 : scrollTop;

  //   thisEl.style.opacity = 1 - (scrollTop / 200);
  // };

  var _handleSidebarScroll = function() {
    var fixedSidebar = document.getElementsByClassName(Selectors.fixedSidebar);

    if (fixedSidebar[0]) {
      var thisEl = fixedSidebar[0],
          parent = thisEl.parentNode,
          parentTop = parent.offsetTop,
          fixedAt = thisEl.dataset.fixedat,
          scrollTop = window.pageYOffset || 
                      document.documentElement.scrollTop;

      var addFixed = (
        (!fixedAt || ((parentTop - scrollTop) <= fixedAt)) &&
        (window.innerWidth >= MaxMobileWidth)
      ) ? true : false ;

      if (addFixed) {
        thisEl.style.width = parent.offsetWidth + 'px';
        thisEl.style.position = 'fixed';

        if (fixedAt) {
          thisEl.style.top = fixedAt + 'px';
        }
      } else {
        thisEl.style.width = 'auto';
        thisEl.style.position = 'static';
      }
    }
  };

  // var _handlePageTitlePastFold = function() {
  //   var pageTitleArr = document.getElementsByClassName(Selectors.pageTitlePastFold);

  //   if (!pageTitleArr[0]) {
  //     // console.log('page title not found!');
  //     return;
  //   }

  //   var pageTitle = pageTitleArr[0];

  //   if ((window.pageYOffset || document.documentElement.scrollTop) >= window.innerHeight) {
  //     pageTitle.classList.add('visible');
  //     return;
  //   }

  //   pageTitle.classList.remove('visible');
  // };

  var _handleWindowResize = function() {
    _setMaxMobileWidth();
    _setDimensions();
  };

  var _handleWindowScroll = function() {
    _handleHeaderScroll();
    _handleSidebarScroll();
    // _handlePortraitScroll();
    // _handlePageTitlePastFold();
    // console.log(window.pageYOffset);
  };

  // extended from https://stackoverflow.com/a/31987330
  var _scrollTo = function(to, duration) {
    var scrollEl = document.documentElement,
        maxBottom = scrollEl.offsetHeight - window.innerHeight;

    if (to >= maxBottom) {
      to = maxBottom;
    } else if (to <= 0) {
      to = 0;
    }

    var difference = to - window.scrollY,
        perTick = difference / duration * 10;

    setTimeout(function() {
      window.scrollTo(window.scrollX, window.scrollY + perTick);
      if (window.scrollY === to) return;
      _scrollTo(to, duration - 10);
    }, 10);
  };

  var _handleWorkMenuClick = function(e) {
    e.preventDefault();

    var newURL = e.target.getAttribute('href'),
        newTarget = document.querySelectorAll(newURL)[0],
        newTargetTop = newTarget.getBoundingClientRect().top - 
                       document.body.getBoundingClientRect().top;

    e.target.blur();
    _scrollTo(parseInt(newTargetTop) - 100, 500);
  };

  var _bindEvents = function() {
    window.addEventListener('resize', _handleWindowResize);
    document.addEventListener('scroll', _handleWindowScroll);

    var els = document.querySelectorAll('.' + Selectors.workMenu + ' a');

    for (var i = 0; i < els.length; i++) {
      els[i].addEventListener('click', _handleWorkMenuClick);
    }
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