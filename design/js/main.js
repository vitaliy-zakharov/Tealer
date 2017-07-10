$(document).ready(function(){
    initSlider();
    initSelectBox();
    plasholderDetect();
    initPopup();
    initTimer();
})
$(window).load(function(){
    setTimeout(function() { 
        window.scrollTo(0, 0) 
    }, 100)
    initNavigation();
    
})
function initNavigation(){
    $('.main-navigation').smint({
    	'scrollSpeed' : 300
    });
}
function initSlider(){
    $('.flexslider').flexslider({
        animation: 'fade',
        slideshow: false,
        directionNav: false,
        controlNav: true,
        manualControls: ".slider-navigation ul li a",
    })
}
function initSelectBox(){
	$(function() {
		$(".sort-select").each(function() {					
			var sb = new SelectBox({
				selectbox: $(this),
				height: 150,
				width: 305
			});
		});
		$('.weight-select').each(function() {					
			var sb = new SelectBox({
				selectbox: $(this),
				height: 150,
				width: 138
			});
		});
	});
}
function plasholderDetect(){
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  })
		});
	
	}
}
function initPopup(){
    var type, color
    $('.open-popup').on('click', function(e){
        e.preventDefault();
        type = $(this).attr('data-popup');
        $('.custom-overlay').fadeIn('300');
        if (type == 'tea-item'){
            var element = $(this).parents('.tea-item')
            var image = $('.image', element).html();
            color = element.attr('data-color');
            var name = $('.name a', element).html()
            var text = $('.text', element).html();
            var text2 = $('.text2', element).html();
            $('.custom-popup.'+type+' .inner').html('<div class="'+color+'">\
                                                        <div class="image">'+image+'</div>\
                                                        <div class="text"><h2>'+name+'</h2>'+text+'</div>\
                                                        <div class="text2">'+text2+'</div>\
                                                        <a href="#" class="buy">Купить</a>\
                                                        <a href="#" class="close">Закрыть</a>\
                                                      </div>');
            $('.custom-popup.'+type+' > .close').addClass(color);
            $('.custom-popup.'+type).fadeIn('300')
        }else{
            $('.custom-popup.'+type).fadeIn('300');
        } 
    })
    $('.custom-popup .close, .custom-overlay').on('click', function(e){
        e.preventDefault();
        $('.custom-overlay').fadeOut('300');
        $('.custom-popup.'+type).fadeOut('300', function(){
            $('.custom-popup.'+type+' > .close').removeClass(color);
        });
    })
}
function initTimer(){
    var yy = parseFloat($('.timer').attr('data-yy'))
    var mm = parseFloat($('.timer').attr('data-mm'))
    var dd = parseFloat($('.timer').attr('data-dd'))
    var newYear = new Date(yy, mm-1, dd); 
    $('.timer').countdown({until: newYear, format: 'HM', layout:'<div class="hour">\
                                                                    <div class="number">{hn}</div>\
                                                                    <div class="name">часы</div>\
                                                                </div>\
                                                                <div class="dots">:</div>\
                                                                <div class="minutes">\
                                                                    <div class="number">{mn}</div>\
                                                                    <div class="name">минуты</div>\
                                                                </div>'});
                            
}
