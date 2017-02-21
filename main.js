$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	$(".circle").on("click", function (e) {
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		var circle_clicked = $(this),
			text = circle_clicked.data("text"); //looks for the data-text attribute and stores its value


		$("#popIn").text(text); //assign the text for the element to the popIn container in the slide

		$("#slide").addClass("active");
		//add a class="active" to #slide to apply the #slide.active styles to it, making it visible
	});

	$(".btn_close").on("click", function (e) {
		e.preventDefault();
		$("#slide").removeClass("active"); //remove class="active" from #slide, making it not visible
	});
});
