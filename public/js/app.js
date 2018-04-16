$(function(){
  // Initiate materialize side nav
  $(".button-collapse").sideNav();

  var parallax = $('.parallax');

  if(parallax.length){
    parallax.parallax();
  }


})
