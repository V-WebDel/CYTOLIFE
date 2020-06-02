$(function() {

	// Mask phone
	$('input[name="Lead[phone]"]').mask('8 (999) 999 - 99 - 99');
	$('input[name="Lead[age]"]').mask('99');


	// Section modal
	$(".modal-btn").click(function(evt){
		evt.preventDefault();
		$(".modal").removeClass("hidden");
		$(".overlay").removeClass("hidden");
	});

	$(".overlay, .modal__close").click(function(){
		$(".modal").addClass("hidden");
		$(".overlay").addClass("hidden");
	});
	$(document).keyup(function(e) {
		if (e.keyCode === 27) { 
		$(".modal").addClass("hidden");
		$(".overlay").addClass("hidden");
		}
	});

	//Animation Scroll
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		
		$(".wrapper-top__image_points").css({"transform" : "translate(-50%," + -st/10 + "%)"}); 	
		$(".wrapper-top__circle_1").css({"transform" : "translateY(" + -st/2 + "%)"}); 	
		$(".wrapper-top__circle_2").css({"transform" : "translateY(" + -st/3 + "%)"}); 	
		
	});

	// WOW
	var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       80,
			mobile:       false,
			live:         true,
			callback:     function(box) {

			},
			scrollContainer: null 
		}
	);
	wow.init();
	
	// Animate.css
	$('.top__title, .top__price, .title-text').addClass('animated zoomIn');
	$('.sign-up__text, .sign-up__price, .forms__title, .forms__subtitle').addClass('animated zoomIn');
	$('.btn-wrap').addClass('animated heartBeat');
	$('.promo__text, .promo__title, .promo__price').addClass('animated fadeInRight');
	$('.set__item, .addresses__item').addClass('animated fadeInUp');
	$('.signs__item').addClass('animated zoomIn');

	

});

// Swiper slider
var swiper_one = new Swiper('.swiper-specialists', {
	speed: 1000,
	spaceBetween: 50,
	loop: true,
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		1200: { 
			spaceBetween: 0,
			slidesPerView: 5,
			centeredSlides: true,
			touchRatio: 0,
		}, 
		992: { 
			spaceBetween: 0,
			slidesPerView: 4,
			centeredSlides: false,
			touchRatio: 1,
		}, 
		768: { 
			slidesPerView: 3,
			centeredSlides: true,
		},
		576: { 
			slidesPerView: 2,
			centeredSlides: false,
		},
		400: { 
			centeredSlides: false,
			slidesPerView: 1.6,
			spaceBetween: 10,
		}, 
		320: { 
			centeredSlides: false,
			slidesPerView: 1.3,
			spaceBetween: 10,
		}, 
	},
});

// Swiper slider
var swiper_one = new Swiper('.swiper-reviews', {
	speed: 1500,
	spaceBetween: 50,
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,

	autoplay: {
		delay: 5000,
	},

	effect: 'fade',

	fadeEffect: {
		crossFade: true
	},
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
});