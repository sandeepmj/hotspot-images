$(document).ready(function () {
	$('#circle_banana').click(function () {
		console.log('Banana');
		$('#circle_banana').addClass('circle_banana_hide');
		$('#info_banana').addClass('info_slides');
	});
});
