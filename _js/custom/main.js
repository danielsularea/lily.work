;(function(mainObj) {
  'use strict';

  var obj = mainObj;

  var Classes = obj.settings = {
    workHeader:         'js--workheader',
    workHeaderTitle:    'js--workheader_titles',
    blogHeader:         'js--blogheader'
  };

  var _setDimensions = function() {
    var workHeader = document.getElementsByClassName(Classes.workHeader);
        // workHeaderTitle = document.getElementsByClassName(Classes.workHeaderTitle);

    if (workHeader) {
      var diff = window.innerHeight - 
              workHeader[0].getBoundingClientRect().bottom;

      console.log(workHeader[0].getBoundingClientRect().top);
      console.log(workHeader[0].offsetHeight);

      workHeader[0].style.paddingTop = diff + 'px';
    }
  };

  var _handleWindowResize = function() {

  }

  var _bindEvents = function() {
    window.addEventListener("resize", _handleWindowResize);
  }

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