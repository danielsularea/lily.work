;(function(mainObj) {
  'use strict';

  var obj = mainObj;
  var MaxMobileWidth;

  var Selectors = obj.settings = {
    headerScroll:       'js--headerScroll',
    // portrait:           'l--home_portrait',
    workMenuFixed:      'js--workMenuFixed',
    workMenuClick:      'js--workMenuClick',
    workMenuScrollBy:   'js--workMenuScrollBy',
    zoomImages:         '[data-action="zoom"]',
  };

  // ---------------------------------
  // HELPER FUNCTIONS
  // ---------------------------------

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

  // get Y position of element from top of page
  var _getYPos = function(element) {
    if (!element) return;

    return element.getBoundingClientRect().top - 
           document.body.getBoundingClientRect().top;
  };

  // ---------------------------------
  // SET UP FUNCTIONS
  // ---------------------------------

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

  // ---------------------------------
  // EVENT LISTENERS
  // ---------------------------------

  // fix header when scrolling, plus additional styles
  var _handleHeaderScroll = function() {
    var headerArr = document.getElementsByClassName(Selectors.headerScroll);

    if (!headerArr[0]) { return; }

    var header = headerArr[0],
        scrollTop = window.pageYOffset || 
                    document.documentElement.scrollTop;

    if (scrollTop > 0) {
      header.classList.add('fixed');
      return;
    }

    header.classList.remove('fixed');
  };

  // var _handlePortraitScroll = function() {
  //   var thisEl = document.getElementsByClassName(Selectors.portrait)[0],
  //       scrollTop = window.pageYOffset;

  //   scrollTop = (scrollTop <= 0) 1 : scrollTop;

  //   thisEl.style.opacity = 1 - (scrollTop / 200);
  // };

  // fix workMenu when scrolling past its parent
  var _handleWorkMenuFixed = function() {
    var el = document.getElementsByClassName(Selectors.workMenuFixed);

    if (!el[0]) return;

    var workMenu = el[0],
        parent = workMenu.parentNode,
        offsetY = (workMenu.dataset.offsety) ? (workMenu.dataset.offsety) : 0,
        amountScrolled = window.pageYOffset || document.documentElement.scrollTop,
        triggerPoint = _getYPos(parent) - offsetY,
        biggerThanMobile = window.innerWidth >= MaxMobileWidth;

    if (!biggerThanMobile) return;

    // visible point, given more room for animation
    if (amountScrolled >= (triggerPoint - 50)) {
      workMenu.style.opacity = 1;
    } else {
      workMenu.style.opacity = 0;
    }

    // fixed point
    if (amountScrolled >= triggerPoint) {
      workMenu.style.width = parent.offsetWidth + 'px';
      workMenu.style.position = 'fixed';
      workMenu.style.top = offsetY + 'px';
    } else {
      workMenu.style.width = 'auto';
      workMenu.style.position = 'static';
    }
  };

  var _handleWorkMenuClick = function(e) {
    e.preventDefault();

    var newURL = e.target.getAttribute('href'),
        offsetY = document.getElementsByClassName(Selectors.workMenuClick)[0].dataset.offsety,
        target = document.querySelectorAll(newURL);

    if (!target[0]) return;

    var targetTop = _getYPos(target[0]);
    e.target.blur();
    _scrollTo(parseInt(targetTop) - offsetY, 500);
  };

  var _handleWorkMenuScrollBy = function() {

  };

  var _handleWindowResize = function() {
    _setMaxMobileWidth();
    _setDimensions();
  };

  var _handleWindowScroll = function() {
    _handleHeaderScroll();
    _handleWorkMenuFixed();
    // _handlePortraitScroll();
    _handleWorkMenuScrollBy();
  };

  var _bindEvents = function() {
    window.addEventListener('resize', _handleWindowResize);
    document.addEventListener('scroll', _handleWindowScroll);

    var els = document.querySelectorAll('.' + Selectors.workMenuClick + ' a');

    for (var i = 0; i < els.length; i++) {
      els[i].addEventListener('click', _handleWorkMenuClick);
    }
  };

  // ---------------------------------
  // INIT
  // ---------------------------------

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