;(function(mainObj) {
  'use strict';

  var obj = mainObj;

  var Classes = obj.settings = {
    workHeader:         'js--workheader',
    blogHeader:         'js--blogheader',
  };

  document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
      console.log('here');
    }
  };

  return obj;
}(window.Main || {}));