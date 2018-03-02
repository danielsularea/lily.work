;(function(mainObj) {
  'use strict';

  var obj = mainObj;
  var MaxMobileWidth;

  var Selectors = obj.settings = {
    headerScroll:       'js--headerScroll',
    pushToFold:         'js--pushToFold',
    pushToFoldEl:       'js--pushToFoldEl',
    fixedSidebar:       'js--fixedSidebar',
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

  var _setPushToFold = function() {
    var pushToFold = document.getElementsByClassName(Selectors.pushToFold),
        pushToFoldEl = document.getElementsByClassName(Selectors.pushToFoldEl);

    if (pushToFold[0] && pushToFoldEl[0]) {
      var height = pushToFold[0].offsetHeight,
          style = getComputedStyle(pushToFold[0]);

      height += parseInt(style.marginTop) + parseInt(style.marginBottom);

      var pushAmount = window.innerHeight - height;
      
      pushToFoldEl[0].style.marginTop = pushAmount + 'px';
    }
  };

  var _setDimensions = function() {
    _setPushToFold();
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
    // _handlePageTitlePastFold();
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