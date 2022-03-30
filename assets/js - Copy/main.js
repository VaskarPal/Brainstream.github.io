(function ($) {
"use strict";

/*------------------------------------
		Preloader
	--------------------------------------*/
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({'overflow': 'visible'});
	});

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/

	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".hamburger-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});

/* Search
	-------------------------------------------------------*/
	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.nav-search');
	var $searchClose = $('#search-close');

	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});


// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});

//sidenav
 //extra_btn
 $('.extra_btn').click(function(){
	$('.extra_info').addClass('info-open');
});
$('.close_icon').click(function(){
	$('.extra_info').removeClass('info-open');
});

//sticky-menu
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".main-header-area").removeClass("sticky");
	} else {
		$(".main-header-area").addClass("sticky");
	}
});

   // -------------------------- scroll animate
   var links = $('a.scroll-target');
   links.on('click', function() {
	   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
	   var target = $(this.hash);
		   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		   if (target.length) {
		   $('html,body').animate({
			   scrollTop: target.offset().top - 75,
			   }, 1000);
			   return false;
		   }
	   }
   });


// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow:'<button type="button" class="slick-prev"><i class="far fa-long-arrow-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="far fa-long-arrow-right"></i></button>',
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

//testimonial-active
$('.testimonial-img-active').slick({
	infinite: true,
	slidesToShow: 5,
	loop:true,
	slidesToScroll: 1,
	vertical:true,
	centerMode:true,
	centerPadding: 0,
	autoplay: true,
  	autoplaySpeed: 3000,
	arrows: false,
	asNavFor: '.testtimonial-item-active',
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			vertical:false,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			vertical:false,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			vertical:false,
		  }
		}
	  ]
  });
  $('.testtimonial-item-active').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	asNavFor: '.testimonial-img-active',
	dots: false,
	arrows: false,
	loop:false,
  });

//project-slider
  $('.project-slider-active').slick({
	infinite: true,
	arrows: false,
	centerMode: true,
	margin:"5px",
	centerPadding: "340px",
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1350,
		settings: {
		centerPadding: "150px",
		  centerMode: true,
		  slidesToShow: 2
		}
	  },
	  {
		breakpoint: 940,
		settings: {
		centerPadding: "50px",
		  centerMode: true,
		  slidesToShow: 2,
		}
	  },
	  {
		breakpoint: 780,
		settings: {
		  slidesToShow: 1,
		  centerPadding: 0,
		  centerMode: true,
		 
		}
	  }
	]
  });


//testtimonial-item-active2
  $('.testtimonial-item-active2').slick({
	dots: true,
	infinite: true,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
  	autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 1050,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: 0,
		  slidesToShow: 2
		}
	  },
	  {
		breakpoint: 750,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: 0,
		  slidesToShow: 1
		}
	  },
	]
  });
//testtimonial-item-active2
  $('.testtimonial-item-active3').slick({
	dots: true,
	infinite: true,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
  	autoplaySpeed: 2000,
  });


//testtimonial-item-active2
  $('.brand-active').slick({
	infinite: true,
	arrows: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
  	autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 1000,
		settings: {
		  slidesToShow: 3
		}
	  },
	  {
		breakpoint: 800,
		settings: {
		  slidesToShow: 2
		}
	  },
	  {
		breakpoint: 500,
		settings: {
		  slidesToShow: 1
		}
	  }
	]
  });

// owlCarousel
$('.owlcarousel').owlCarousel({
    loop:true,
    margin:0,
	items:2,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:2
        }
    }
})
//tilt-js
$('.js-tilt').tilt({
    glare: false,
})
/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

// active-class
$('.feature_box').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.feature_box').removeClass('active');
})

// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1,
		gutter: 0
	}
	});
	// filter items on button click
	$('.portfolio-menu').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

//counter
$('.counter').counterUp({
    delay: 10,
    time: 3000
});



// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 500, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 300, // Animation in speed (ms)
	animationOutSpeed: 300, // Animation out speed (ms)
	scrollText: '<i class="fas fa-chevron-double-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();
//progress-bar
$('.chart').easyPieChart({
	barColor:'#fff',
	trackColor:'#ff8d54',
	lineWidth:7,
	lineCap:'square',
	scaleColor:0,
	scaleLength:0,
	size:120,
	animate:{
		duration:2000,
		enabled:true,
	},
});
//progress-bar
$('.chart2').easyPieChart({
	barColor:'#ff7029',
	trackColor:'#fff0e9',
	lineWidth:7,
	lineCap:'square',
	scaleColor:0,
	scaleLength:0,
	size:110,
	animate:{
		duration:2000,
		enabled:true,
	},
});
//progress-bar
$('.chart3').easyPieChart({
	barColor:'#57b33e',
	trackColor:'#fff0e9',
	lineWidth:7,
	lineCap:'square',
	scaleColor:0,
	scaleLength:0,
	size:110,
	animate:{
		duration:2000,
		enabled:true,
	},
});
//progress-bar
$('.chart4').easyPieChart({
	barColor:'#ff7029',
	trackColor:0,
	lineWidth:15,
	lineCap:'square',
	scaleColor:0,
	scaleLength:0,
	size:200,
	animate:{
		duration:2000,
		enabled:true,
	},
});
//progress-bar
$('.chart5').easyPieChart({
	barColor:'#57b33e',
	trackColor:0,
	lineWidth:15,
	lineCap:'square',
	scaleColor:0,
	scaleLength:0,
	size:200,
	animate:{
		duration:2000,
		enabled:true,
	},
});
//progress-bar
$('.chart6').easyPieChart({
	barColor:'#ff7029',
	trackColor:'#ebebeb',
	lineWidth:10,
	lineCap:'square',
	scaleColor:0,
	scaleLength:0,
	size:150,
	animate:{
		duration:2000,
		enabled:true,
	},
});
//progress-bar
$('.chart7').easyPieChart({
	barColor:'#57b33e',
	trackColor:'#ebebeb',
	lineWidth:10,
	lineCap:'square',
	scaleColor:0,
	scaleLength:0,
	size:150,
	animate:{
		duration:2000,
		enabled:true,
	},
});

   //map
   function basicmap() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 11,
		scrollwheel: false,
		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(40.6700, -73.9400), // New York
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
	};
	// Get the HTML DOM element that will contain your map 
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('contact-map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	// Let's also add a marker while we're at it
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.6700, -73.9400),
		map: map,
		title: 'Cryptox'
	});
}
if ($('#contact-map').length != 0) {
	google.maps.event.addDomListener(window, 'load', basicmap);
} 

//nice-select
$(document).ready(function() {
	$('select').niceSelect();
  });   

})(jQuery);