// $( document ).ready(function() {
// 	function downLoad(){
// 	  if (document.all){
// 	      document.all["layer1"].style.visibility="hidden";
// 	      document.all["layer2"].style.visibility="visible";
// 	  } else if (document.getElementById){
// 	      node = document.getElementById("layer1").style.visibility='hidden';
// 	      node = document.getElementById("layer2").style.visibility='visible';
// 	  }
// 	}

// 	$(window).load(function() {
	
// 	})
// });

$( document ).ready(function() {
	$(window).scroll(function () {
	  if ($(document).scrollTop() < 150) {
	    $('.lc-nav').removeClass('lc-tiny-nav');
	    $('.lc-nav-link-top').addClass('hidden');
	  } else {
	    $('.lc-nav').addClass('lc-tiny-nav');
	    $('.lc-nav-link-top').removeClass('hidden');
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