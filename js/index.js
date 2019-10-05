$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

function parallaxEffect() {
  
  var parallax = $('.parallax');
  
  $(window).on('scroll', function() {
    
    var scrolled = $(window).scrollTop();
    
    parallax.css('transform', 'translateY(' + scrolled * -0.5 + 'px)');
    
  });
  
}

$(parallaxEffect);

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
	console.log("Activa script");	
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});