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
	PATH : "background-iphone.png",
	WIDTH : 396,
	HEIGHT : 744,
	INNER_WIDTH : 320,
	INNER_HEIGHT : 460,
	MAGIN_LEFT : 39,
	MAGIN_TOP : 145,
	isLoading : true
};	// end iPhoneImage

$(function(){
	if(	navigator.userAgent.indexOf('Linux; U; Android ') == -1 &&
		navigator.userAgent.indexOf('iPhone; U') == -1 &&
		navigator.userAgent.indexOf('iPad; U') == -1){
		
		$('div').live('pagebeforeshow',function(event, ui){
			if(!jQuery.support.checkOn){
				// for web-kit page transition
				$('.background-iphone').show();
			}
		});
		$('div').live('pageshow',function(event, ui){
			$('.background-iphone').hide();
			$('.' + $.mobile.activePageClass).closest('.background-iphone').show();
		});
		$('body').live('pagecreate',function(event){
			if(iPhoneImage.isLoading) {
				var resizeRate = $(window).height() / iPhoneImage.HEIGHT;
				$('div[data-role="page"]').css("overflow-y", "auto");
				$('div[data-role="page"]').css("overflow-x", "hidden");
				$('div[data-role="page"]').css("height", iPhoneImage.INNER_HEIGHT*resizeRate + "px");
				$('div[data-role="page"]').css("width", iPhoneImage.INNER_WIDTH*resizeRate + "px");
				$('div[data-role="page"]').css("margin-top", iPhoneImage.MAGIN_TOP*resizeRate + "px");
				$('div[data-role="page"]').css("margin-left", iPhoneImage.MAGIN_LEFT*resizeRate + "px");
				$('div[data-role="page"]').wrap('<div class="background-iphone"></div>');
				$('.background-iphone').prepend('<img src="' + iPhoneImage.PATH + '" class="background-iphone-img"/>');
				$('.background-iphone').css("margin-left", ($(window).width() - iPhoneImage.INNER_WIDTH)/2 + "px");
				$('.background-iphone').css("height", iPhoneImage.HEIGHT + "px");
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
