$(function() {
	$('#game').click(function() { 
    window.location="control_01.html";
  });

	$('#game').click(function() { 
    socket.emit('click', 'game');
  });


});