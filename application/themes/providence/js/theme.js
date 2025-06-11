

/*
	MOBILE MENU
*/
$(function() {
	
	var
	$window = $(window),
	$breakpoint = 992,
	$parent = $('.navbar-nav__primary > .nav-item'),
	$link = $('.nav-link.dropdown'),
	$dropdown = '.dropdown-menu',
	$showChild = 'show-child',
	$back = $('.dropdown-menu-back');
	
	// PREVENTS THE PARENT LINK FROM SENDING THE USER TO THE HREF AND INSTEAD ADDS A CLASS TO IT THAT OPENS ITS CHILDS DROPDOWN MENU IF THE SCREEN WIDTH IS LESS THAN 992PX 
	$parent.on('click', function(e) {
			
		if ($window.width() < $breakpoint) {
		
			$(this).addClass($showChild);
			
// 			return false;
							
		} else {
		
// 			return true;
		
		}

	});

	// PREVENTS THE PARENT LINK FROM SENDING THE USER TO THE HREF AND INSTEAD ADDS A CLASS TO IT THAT OPENS ITS CHILDS DROPDOWN MENU IF THE SCREEN WIDTH IS LESS THAN 992PX ON WINDOW RESIZE
	function resize() {
		$parent.on('click', function(e) {
			if ($window.width() < $breakpoint) {
			
				$(this).addClass($showChild);
// 				return false;
			
			} else {
			
// 				return true;
			
			}
		});
	}	
	
	$window.resize(resize).trigger('resize');	
	
	// MENU BACK
	$back.click(function(e) {

// 		$(this).parent().parent().removeClass('show-child');
			$(this).parent().parent().parent().removeClass('show-child');
			return false;
		
	});	
	
});



/*
	Primary Navigation Toggle - screen sizes under 992px
*/
$(function() {
	
	var
	$toggle = $('#primaryNavigationToggle'),
	$togglerOpen = 'navbar-toggler-open',
	$body = $('body'),
	$window = $(window),
	$breakpoint = 991;
	
	// Adds a class to the body that sets the mobile menu to open
	$toggle.click(function() {
		$body.toggleClass($togglerOpen);
	});
	
	// Closes the mobile menu if the browser is resized past 992px
	$window.resize(function resize() {
		if ($window.width() > $breakpoint) {
			$body.removeClass($togglerOpen);
		}
	}).trigger('resize');
	
	
});



/*
	ACCORDIONS
*/

$(function() {
	
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).parent().addClass('card-active');
	});
	
	$('.collapse').on('hidden.bs.collapse', function () {
		$(this).parent().removeClass('card-active');
	});

});

/*
$('.communities-card .btn-accordion').click(function() {
	
	if($(this).closest('.card-active').find('.collapse').hasClass('show'))
	  $(this).parents('.communities-card').removeClass('card-active');
	
	if(!$(this).closest('.communities-card').find('.collapse').hasClass('show'))
	  $(this).parents('.communities-card').addClass('card-active');
	
});
*/

// to top right away
if ( window.location.hash ) scroll(0,0);
// void some browsers issue
setTimeout( function() { scroll(0,0); }, 1);

$(function() {

    // your current click function
    $('.scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top -210 + 'px'
        }, 1000, 'swing');
    });

    // *only* if we have anchor on the url
    if(window.location.hash) {

        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top -210 + 'px'
        }, 1000, 'swing');
    }

});