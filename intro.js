$(document).ready(function(){
	
						   
	$('#video')[0].play();
	
	$('#video')[0].addEventListener("ended", function(e) { 
		window.location="intro_00.html";
 	});

});


//opacity: 0.0;