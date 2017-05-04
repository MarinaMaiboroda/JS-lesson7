$('.menu__list').on('click', 'a', function(event){
	event.preventDefault();
	var link = $(this).attr('href');
	//console.log(link);
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop:  distanse
	}, 500);
});

$(document).ready(function(){
	$('.slide-gallery:has(.btn)').css('background', 'red');
});


$(window).scroll(function(){
	var dist = $('#about_us').offset().top;
	console.log('window ' + $(window).scrollTop() + ' dist ' + dist);
	if ($(window).scrollTop() >= dist){
		$('.header').css('background', 'rgba(255,255,255, 0.7)');
	}else{
		$('.header').css('background', 'transparent');
	}
});