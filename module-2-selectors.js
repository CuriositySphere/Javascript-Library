$ (function(){

	// alert("It's Working");
	//By id - this adds a CSS class
	$("#exampleone").addClass('highlight');

	//By Class - we'll make two things change here.
	$('.exampletwo').css('border' , '4px solid gray');

	//By Element
	$('h5').click(function(){
		$('h5').fadeOut('slow', 'linear');
	});    //new functions should always be closed off
	//https://jqueryui.com/draggable/
	//$('#draggable').draggable();

	$('#id-combo-demo, .class-combo-demo, #draggable').draggable();

	$('li:contains("sad")').click(function(){
		$(this).hide();
	});
});