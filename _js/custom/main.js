;(function(mainObj) {
  'use strict';

  var obj = mainObj;

  var Classes = obj.settings = {
    workHeader:         'js--workheader',
    widthOfParent:      'js--widthOfParent',
    visiblePastFold:    'js--visiblePastFold',
    smoothScroll:       'js--smoothScroll',
  };

  var _setDimensions = function() {
    var workHeader = document.getElementsByClassName(Classes.workHeader);
    if (workHeader[0]) {
      var diff = window.innerHeight - workHeader[0].getBoundingClientRect().bottom;
      workHeader[0].style.paddingTop = diff + 'px';
    }

    var widthOfParent = document.getElementsByClassName(Classes.widthOfParent);
    if (widthOfParent[0]) {
      var parent = widthOfParent[0].parentNode;
      widthOfParent[0].style.width = parent.offsetWidth + 'px';
    }
  };

  var _handleVisiblePastFoldScroll = function() {
    var visiblePastFold = document.getElementsByClassName(Classes.visiblePastFold);

    if (!visiblePastFold[0]) { return };

    if (document.body.scrollTop > window.innerHeight) {
      _addClass(visiblePastFold[0], 'visible');
      return;
    }

    _removeClass(visiblePastFold[0], 'visible');
  };

  var _handleWindowResize = function() {

  };

  var _handleWindowScroll = function() {
    _handleVisiblePastFoldScroll();
  };

  var _bindEvents = function() {
    window.addEventListener("resize", _handleWindowResize);
    window.addEventListener("scroll", _handleWindowScroll);
  };

  var _hasClass = function(el, cl) {
    return el.className.match(new RegExp('(\\s|^)' + cl + '(\\s|$)'));
  };

  var _addClass = function(el, cl) {
    if (!_hasClass(el, cl)) {
      el.className += ' ' + cl;
    }
  };

  var _removeClass = function(el, cl) {
    if (_hasClass(el, cl)) {
      var reg = new RegExp('(\\s|^)' + cl + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  };

  var _toggleClass = function(el, cl) {
    if (!_hasClass(el, cl)) {
      _addClass(el, cl);
      return;
    }

    _removeClass(el, cl);
  };

  obj._init = function() {
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