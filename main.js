$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements
	/*function used in several places to show slide info*/
	var showInfo = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
	}

	$(".circle").on("click", function (e) {
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		var circle_clicked = $(this),
			text = circle_clicked.data("text"); //looks for the data-text attribute and stores its value

		$("#popIn").text(text);

		$("#slide").addClass("active");
	});

	$(".btn_close").on("click", function (e) {
		e.preventDefault();
		$("#slide").removeClass("active");
	});
});
