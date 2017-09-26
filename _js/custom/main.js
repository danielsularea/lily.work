;(function(mainObj) {
  'use strict';

  var obj = mainObj;

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
      insertPageTitle: document.getElementsByClassName('js--insertPageTitle'),
      pageTitleData: document.querySelector('[data-pageTitle]'),
      headerMenu: document.getElementsByClassName('m--header_menu'),
      onEnter: function () {
        // if (insertPageTitle[0] && pageTitleData[0]) {
        //   var pageTitleHtml = '';
        //   pageTitleHtml += '<div class="m--header_pageTitle js--pageTitlePastFold">';
        //   pageTitleHtml += pageTitleData[0].dataset.pageTitle;
        //   pageTitleHtml += '</div>';

        //   this.insertPageTitle[0].insertAdjacentHTML('afterbegin', pageTitleHtml);
        // }
      },
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

  var _setDimensions = function() {
    var fixedBlogHeader = document.getElementsByClassName(Classes.fixedBlogHeader);
    if (fixedBlogHeader[0]) {
      var thisEl = fixedBlogHeader[0],
          parent = thisEl.parentNode;
      thisEl.style.width = parent.offsetWidth + 'px';
      thisEl.style.position = 'fixed';
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

  };

  var _handleWindowScroll = function() {
    _handlePageTitlePastFold();
  };

  var _bindEvents = function() {
    document.addEventListener("resize", _handleWindowResize);
    document.addEventListener("scroll", _handleWindowScroll);
  };

  obj._init = function() {
    _initBarba();
    _setDimensions();
    _bindEvents();
  };

  obj._init();

  return obj;
}(window.Main || {}));