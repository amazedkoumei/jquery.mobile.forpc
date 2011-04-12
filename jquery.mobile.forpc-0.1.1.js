/*!
 * jquery.mobile.forpc JavaScript Library v0.1.0
 *
 * Copyright (c) 2011 amazedkoumei (Twitter: @amazedkoumei, Blog:http://blog.amazedkoumei.com)
 * Licensed under the MIT license + "keep this comment block even if you modify it".
 *
 * History:
 *  04-11-2011 Published as jquery.mobile.forpc-0.1.0.js
 */
var iPhoneImage = {
	// set your iPhone image path
	PATH : "/core/css/images/background-iphone.png",
	// set Integer, how many px far from left side you would like to show iPhone image 
	// null means centering 
	POSITION_LEFT : null,
	
	WIDTH : 396,
	HEIGHT : 744,
	INNER_WIDTH : 320,
	INNER_HEIGHT : 460,
	MAGIN_LEFT : 37,
	MAGIN_TOP : 145,
	isLoading : true
};	// end iPhoneImage

$(function(){
	if(	navigator.userAgent.indexOf('Linux; U; Android ') == -1 &&
		navigator.userAgent.indexOf('iPhone; U') == -1 &&
		navigator.userAgent.indexOf('iPad; U') == -1){
		
		$('div[data-role="page"]').live('pagebeforeshow',function(event, ui){
			if(!jQuery.support.checkOn){
				// for web-kit page transition
				$('.background-iphone').show();
			}
		});
		$('div[data-role="page"]').live('pageshow',function(event, ui){
			$('.background-iphone').hide();
			$('.' + $.mobile.activePageClass).closest('.background-iphone').show();
		});
		$('div[data-role="page"]').live('pagecreate',function(event){
			var resizeRate =  iPhoneImage.HEIGHT / $(window).height();
			if(iPhoneImage.POSITION_LEFT == null) {
				iPhoneImage.POSITION_LEFT = ($(window).width() - iPhoneImage.INNER_WIDTH)/2;
			}
			$(this).css("overflow-y", "auto");
			$(this).css("overflow-x", "hidden");
			$(this).css("height", iPhoneImage.INNER_HEIGHT + "px");
			$(this).css("width", iPhoneImage.INNER_WIDTH + "px");
			$(this).css("margin-top", iPhoneImage.MAGIN_TOP + "px");
			$(this).css("margin-left", iPhoneImage.POSITION_LEFT + iPhoneImage.MAGIN_LEFT + "px");
			$(this).wrap('<div class="background-iphone"></div>');
			$(this).closest('.background-iphone').prepend('<img src="' + iPhoneImage.PATH + '" class="background-iphone-img"/>');
			$(this).closest('.background-iphone').css("padding-left", iPhoneImage.POSITION_LEFT + "px");
			$(this).closest('.background-iphone').css("height", $(window).height() + "px");
			$(this).closest('.background-iphone').css("font-size", resizeRate*100 + "%");
			$(this).closest('.background-iphone').css("position", "relative");
			$(this).closest('.background-iphone-img').css("height", resizeRate*100 + "%");
		});
		$('div[data-role="page"]').live('pagebeforecreate',function(event){
			$(this).find('div[data-position="fixed"]').each(function(index, div) {
				$(div).attr("data-position", "inline");
			});
		});
	}
});	// end onload
