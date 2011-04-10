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
	PATH : "background-iphone.png",
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
		$('body').live('pagecreate',function(event){
			if(iPhoneImage.isLoading) {
				var resizeRate =  iPhoneImage.HEIGHT / $(window).height();
				if(iPhoneImage.POSITION_LEFT == null) {
					iPhoneImage.POSITION_LEFT = ($(window).width() - iPhoneImage.INNER_WIDTH)/2;
				}
				$('div[data-role="page"]').css("overflow-y", "auto");
				$('div[data-role="page"]').css("overflow-x", "hidden");
				$('div[data-role="page"]').css("height", iPhoneImage.INNER_HEIGHT + "px");
				$('div[data-role="page"]').css("width", iPhoneImage.INNER_WIDTH + "px");
				$('div[data-role="page"]').css("margin-top", iPhoneImage.MAGIN_TOP + "px");
				$('div[data-role="page"]').css("margin-left", iPhoneImage.POSITION_LEFT + iPhoneImage.MAGIN_LEFT + "px");
				$('div[data-role="page"]').wrap('<div class="background-iphone"></div>');
				$('.background-iphone').prepend('<img src="' + iPhoneImage.PATH + '" class="background-iphone-img"/>');
				$('.background-iphone').css("padding-left", iPhoneImage.POSITION_LEFT + "px");
				$('.background-iphone').css("height", $(window).height() + "px");
				$('.background-iphone').css("font-size", resizeRate*100 + "%");
				$('.background-iphone').css("position", "relative");
				$('.background-iphone-img').css("height", resizeRate*100 + "%");
				iPhoneImage.isLoading = false;
			}
		});	
		$('div[data-position="fixed"]').each(function(index, div) {
			$(div).attr("data-position", "inline");
		});
	}
});	// end onload
