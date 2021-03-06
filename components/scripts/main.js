/* *******************************************************************************************/ 
/**************************** MAIN JS SCRIPT *************************************************/

$(document).ready(function() {
	/*---------------------------------
	/* For the sticky navigation */
	/*-------------------------------*/
	$('.js-section-about-me').waypoint(function(direction) {
		if(direction == 'down') {
			$('nav').addClass('sticky-nav');
		}else {
			$('nav').removeClass('sticky-nav');
		}
	},  {
 		offset: '60px;'
	});

	/*----------------------------------
	/* Scroll on navigation and buttons */
	/*--------------------------------*/

	$("a[href^='#']").bind("click", function(e){
		e.preventDefault();
  	var anchor = $(this);
  	$('html, body').stop().animate({
    	scrollTop: $(anchor.attr('href')).offset().top-50
  	}, 1000);
  	});

	/* ---------------------------------
	/*   Animation */
	/*--------------------------------*/

		/*  For HEADER  */
		$('.js-heading-fadeIn').addClass('animated jackInTheBox');

		$('.js-header-animated').delay(9000).queue(function() {
			$(this).addClass('animated bounceInDown');
		});


		/* For ABOUT ME section*/
		$('.js-about-me-animated').waypoint(function(direction) {
			$('.js-about-me-animated').addClass('animated bounceInRight');
		}, {
			offset: '50%'
		});

		/* For PROJECTS section*/
		$('.js-projects-animated').waypoint(function(direction) {
			$('.js-projects-animated').addClass('animated bounceInLeft');
		}, {
			offset: '50%'
		});

		$('.projects-animated-work').waypoint(function(direction) {
			$('.projects-animated-work').addClass('animated zoomInDown');
		}, {
			offset: '50%'
		});

		/*For my projects*/
		//Add animated and slideInUp class on document load
		$('.js-project').find('.js-project-caption').
		addClass('animated slideInUp');

		
		$('.js-project').mouseover(function() {
			$(this).find('.js-project-caption').
			removeClass('animated slideInUp').
			addClass('animated slideOutDown');
		});

		$('.js-project').mouseout(function() {
			$(this).find('.js-project-caption').
			removeClass('animated slideOutDown').
			addClass('animated slideInUp');
		});

		/* For HIRE ME section*/
		$('.js-hire-me-animated').waypoint(function(direction) {
			$('.js-hire-me-animated').addClass('animated shake');
		}, {
			offset: '80%'
		});


	/*-----------------------------------
	/* Mobile navigation */
	/*---------------------------------*/

		$('.js-mobile-nav-icon').click(function() {
			var nav = $('.js-main-nav');
			var icon = $('.js-mobile-nav-icon i');

			nav.slideToggle(200);
			if(icon.hasClass('ion-navicon-round')) {
				icon.addClass('ion-close-round');
				icon.removeClass('ion-navicon-round');
				
			} else {
				icon.addClass('ion-navicon-round');
				icon.removeClass('ion-close-round');
			}
		});

	/*-----------------------------------
	/* MAP */
	/*---------------------------------*/

		var map = new GMaps({
		    div: '.map',
	        lat: 51.2627699,
			lng: 0.99800489,
			zoom: 10
		});

		map.addMarker({
		  	lat: 51.146465,
		  	lng: 0.875019,
		  	title: 'Ashford',
		  	infoWindow: {
		  	content: '<p>My place in Ashford</p>'
			}
		});

	/*-----------------------------------
	/* Open my photo in  modal window*/
	/*---------------------------------*/
	var modal       = document.getElementById('myModal');
	var img         = document.getElementById('myImg');
	var modalImg    = document.getElementById('img01');
	var captionText = document.getElementById('caption');
	var span 		= document.querySelector('.close');

	img.onclick = function() {
		modal.style.display = 'block';
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	};

	span.onclick = function() {
		modal.style.display = 'none';
	};

	window.onclick = function(event) {
		if(event.target == modal) {
			modal.style.display = 'none';
		}
	};

});