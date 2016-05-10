$(document).ready(function(){
	//punto 1
	$('#menu-container > nav > ul > li > a').click(function() {
		$('#menu-container > nav > ul > li').removeClass('current-menu-item');
		$(this).parent().addClass('current-menu-item');
		if ($(window).width() <= 990) { //punto 5
			$('.sub-menu').hide();
			$(this).parent().find('.sub-menu').toggle();
		}
	});

	//punto 2
	$('#menu-container > nav > ul > li').hover(function() {
		if ($(window).width() > 990) {
			$(this).find('.sub-menu').fadeToggle(400);
		}
	});
	
	//punto 3
	$('#mobile-button').click(function() {
		$('#menu-container').show();
		$('#mobile-button').hide();
		$('#mobile-close').show();
	});
	
	//punto 4
	$('#mobile-close').click(function() {
		$('#menu-container').hide();
		$('#mobile-button').show();
		$('#mobile-close').hide();
	});

	$(window).resize(function() {
    	if($(window).width() >= 990) {
      		$('.sub-menu').hide();
      		$('#mobile-button,#mobile-close').hide();
    	} else {
      	if($('#menu-container').is(':visible')) {
        	$('#mobile-close').show();
      	} else {
        	$('#mobile-button').show();
		} 
		}
	});
});
