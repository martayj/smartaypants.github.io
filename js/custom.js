$(function() {
	"use strict";

	// resize profile section to fit window.

	function resize() {
		var height = ($(window).height()) + 'px';
		$('#profile').css({'height': height});
		$('.profile-content').css({'margin-top': '-'+($('.profile-content').height()/2)+'px'});
		$('#about').css({'min-height': height});
		$('#techinical').css({'min-height': height});
		$('#career').css({'min-height': height});
		$('#qualifications').css({'min-height': height});
	}
	
	resize();
	$(window).resize(function() {
	  resize();
	});

	// highlight active nav	
	
	function activateNav($section) {
		var sectionId = '#' + $section.attr('id'),
			activeNav = $('.nav-header--menu li.active'),
			newActiveNav = $('li.menu-item a[href="' + sectionId + '"]');

		activeNav.removeClass('active');
		newActiveNav.parent('li').addClass('active');
	}

	$('#page-content section').waypoint(function(direction) {
	  if (direction == 'down') {
	  	activateNav($(this));
	  }
	},{ offset: 1 });
	
	$('#page-content section').waypoint(function(direction) {
	  if (direction == 'up') {
	  	activateNav($(this));
	  }
	},{ 
		offset: function() {
		  return -$(this).height()+1;
		}
	});
	
	// highlight the box hovered by mouse cursor  
	$('.dimmed-effect .content-box').mouseenter(function(){
		$('.dimmed-effect .content-box').not(this).each(function() {
            $(this).addClass('disable');
        });
	});
	$('.dimmed-effect .content-box').mouseleave(function(){
		$('.dimmed-effect .content-box').each(function() {
            $(this).removeClass('disable');
        });
	});
	
	// Smooth Scrolling
	$.localScroll({});
		
	// Animations
	$('[data-animation]').appear();

	$(document.body).on('appear', '[data-animation]', function() {
		$(this).each(function() {
			var ani = $(this).data('animation');
			$(this).addClass(ani);
			$(this).css('opacity', '1');	
		});
	});
	
	// Alpha
	$('.editable-alpha').css({
		'opacity': ($('.editable-alpha').attr('data-alpha')/100)
	});

});
