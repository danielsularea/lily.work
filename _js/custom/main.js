;(function(mainObj) {
  'use strict';

  var obj = mainObj;

  var Classes = obj.settings = {
    fixedBlogHeader:    'js--fixedBlogHeader',
    pageTitlePastFold:  'js--pageTitlePastFold',
  };

  var _initBarba = function() {

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

    if (!pageTitleArr[0]) { return; }

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
    document.addEventListener('DOMContentLoaded', function(e) {
      Barba.Pjax.start();
    });

    document.addEventListener("resize", _handleWindowResize);
    document.addEventListener("scroll", _handleWindowScroll);
  };

  obj._init = function() {
    _initBarba();
    _setDimensions();
    _bindEvents();
  };

  document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
      obj._init();
    }
  };

  return obj;
}(window.Main || {}));