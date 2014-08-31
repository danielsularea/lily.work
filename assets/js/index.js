$( document ).ready(function() {
	$(window).scroll(function () {
	  if ($(document).scrollTop() < 150) {
	    $('.lc-nav').removeClass('lc-tiny-nav');
	    $('.lc-back-top').addClass('hidden');
	  } else {
	    $('.lc-nav').addClass('lc-tiny-nav');
	    $('.lc-back-top').removeClass('hidden');
	  }
	});

  $('.lc-nav-link-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});