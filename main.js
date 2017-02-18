$(document).ready(function () {


	/*Banana info*/
	$('#circle_banana').click(function () {
		console.log('Banana');
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
		$('#popIn').text('The Banana is a year-round favorite, great tasting, nutritious, inexpensive and comes hermetically sealed.').addClass('popIn-info');
	});


	/*grapes info*/
	$('#circle_grapes').click(function () {
		console.log('grapes');
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
		$('#popIn').text('The diminutive grape comes in green and red. Best sipped after fermenting.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X-close').click(function () {
		$('#X-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/


	});

});
