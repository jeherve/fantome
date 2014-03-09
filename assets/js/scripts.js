$(document).ready(function(){

	// Responsive videos
	$(".post-content").fitVids();

	// Syntax highlighting
	hljs.initHighlightingOnLoad();

	// Featured Image
	// While waiting for https://github.com/TryGhost/Ghost/issues/128
	featuredImage = $('img[alt="featured-image"]');

	if ( featuredImage.length > 0){
		featuredImageSource = featuredImage.attr('src');
		$('header').css('background-image','url('+featuredImageSource+')');
		featuredImage.remove();
	}

});
