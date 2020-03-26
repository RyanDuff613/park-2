$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));
  
  if (height<=50) {
  	$('.under50').removeClass();
    $('.over50').addClass('highlight');
  } else {
  	$('.over50').removeClass();
    $('.over50').addClass('highlight');
  }

});