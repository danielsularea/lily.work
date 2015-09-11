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

    // Make sure that all clicked links that link to your internal website
    // don't just reload the page but execute a History.pushState call
    var siteUrl = 'http://'+(document.location.hostname||document.location.host);
    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", _handleDelegate);

    // Catch all History stateChange events
    History.Adapter.bind(window, 'statechange', _handleHistoryChange);
  }

  function _handleWindowResize(e) {
    setProjectHeight();
  }

  function _handleDelegate(e) {
    e.preventDefault();
    History.pushState({}, "", this.pathname);
  }

  function _handleHistoryChange(e) {
    var State = History.getState();

    // Load the new state's URL via an Ajax Call
    $.get(State.url, function(data){
        // Replace the "<title>" tag's content
        document.title = data.match(/<title>(.*?)<\/title>/)[1];

        // Replace the content of the main container (.content)
        // If you're using another div, you should change the selector
        console.log(document.getElementsByClassName('content'));
        $('.content').html($(data).find('.content'));

        // If you're using Google analytics, make sure the pageview is registered!
        ga('send', 'pageview', {
          'page': State.url,
          'title': document.title
        });
    });
  }

  obj.init();

}(jQuery, window.Main || {}));