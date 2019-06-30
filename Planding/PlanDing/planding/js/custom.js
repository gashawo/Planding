$(document).ready(function() {
    "use strict";


      $(window).on('scroll', function() {
        if ($(this).scrollTop() > 550) {
            $('.navbar-sticky').fadeIn(500);
        } else {
            $('.navbar-sticky').fadeOut(500);
        }
    });
	

    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
	
	new WOW().init();

	
	// accordian
	var $card = $('.card');
	if ($card.length > 0) {
		$card.each(function(){
			var $cha = $('.card-header a') ;
			$cha.on('click', function(){
                var $this = $(this);
                $this.parent().parent().parent().parent().find($card).removeClass('active');
				$this.parent().parent().parent().addClass('active');
			});
		});
	}
	
	/*--- Smooth scroll ---*/
    var scroll = new SmoothScroll('a[href*="#"]');
	
	/*-- Progressbar --*/
    $('.demo').progressBar();
	
	 /*-- Skills bar --*/
    $('.bar-blue').progressBar({
        shadow: true,
        percentage: false,
        animation: true,
        animateTarget: true,
        barColor: "#789ECF"
    });

	
	/*--- Works slider ---*/
    var owl = $("#preview-slider");
    owl.owlCarousel({
        dots: true,
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        autoPlay: 2000,
        itemsMobile: [400, 1]
    });
	
	
    /*--- Testimonials slider ---*/
    var owl = $("#testimonials-slider");
    owl.owlCarousel({
        pagination: false,
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        autoPlay: 4000,
        itemsMobile: [400, 1]
    });
	
	  /*--- Testimonials slider ---*/
    var owl = $("#testimonials-slider-2");
    owl.owlCarousel({
        pagination: false,
        items: 3,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        autoPlay: 2000,
        itemsMobile: [400, 1]
    });
	
	

});