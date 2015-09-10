(function ($, MyObj, undefined) {
  var obj = MyObj;

  var c = obj.settings = {
    navbar:   '.navbar',
    project:  '.project'
  };

  var $navbar = $(c.navbar);
  var setProjectHeight  = obj.setProjectHeight = function() {
                            var nh = $navbar.outerHeight();
                            $(c.project).each(function() {
                              $(this).css('height', $(window).height() - nh);
                            });
                          };

  obj.init              = function(){
                            setProjectHeight();

                            _bindEvents();
                          };

  function _bindEvents() {
    $(window).on('resize', _handleWindowResize);
  }

  function _handleWindowResize(e) {
    setProjectHeight();
  }

  obj.init();

}(jQuery, window.Main || {}));