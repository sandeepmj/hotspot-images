$(document).ready(function () {
	$('#circle_banana').click(function () {
		console.log('Banana');
		$('#circle_banana, #circle_grapes').addClass('hide_btn');
		$('#X-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
		$('#popIn').text('The Banana is a year-round favorite, great tasting, nutritious, inexpensive and comes hermetically sealed.').addClass('popIn-info');
	});
});
