AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

$(function(){

	'use strict';

	$(".loader").delay(50).fadeOut("slow");
	$("#overlayer").delay(50).fadeOut("slow");

	// Mobile menu — clone nav into slide-out panel
	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});

		setTimeout(function() {
			var counter = 0;
			$('.site-mobile-menu .has-children').each(function(){
				var $this = $(this);
				$this.prepend('<span class="arrow-collapse collapsed">');
				$this.find('.arrow-collapse').attr({
					'data-toggle' : 'collapse',
					'data-target' : '#collapseItem' + counter,
				});
				$this.find('> ul').attr({
					'class' : 'collapse',
					'id' : 'collapseItem' + counter,
				});
				counter++;
			});
		}, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
			var $this = $(this);
			if ( $this.closest('li').find('.collapse').hasClass('show') ) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();
		});

		$(window).resize(function() {
			var $this = $(this),
			w = $this.width();
			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();
			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').addClass('active');
			}
		});

		// Close menu when clicking outside
		$(document).mouseup(function(e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
			}
		});
	};
	siteMenuClone();

	// Accordion (used on portfolio pages)
	var accordion = function() {
		$('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
		$('.collapse').on('show.bs.collapse', function () {
			$(this).closest('.accordion-item').addClass('active');
		});
		$('.collapse').on('hidden.bs.collapse', function () {
			$(this).closest('.accordion-item').removeClass('active');
		});
	}
	accordion();

	// Smooth scroll for in-page anchor links (mobile menu nav)
	var OnePageNavigation = function() {
		$("body").on("click", ".site-nav-wrap li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 400, 'easeInOutExpo', function(){
				window.location.hash = hash;
			});
		});
	};
	OnePageNavigation();

})
