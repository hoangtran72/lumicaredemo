$(document).ready(function() {
  if ($(window).width() <= 576) {
    $("#about-video-div").removeClass('embed-responsive-21by9').addClass('embed-responsive-1by1');
  }
});


// display navbar when hover over hamburger menu
$('.nav').hover(function() {
  $(".dropdown-menu").addClass('show');
  $('#dropdownMenuButton').removeClass('fa-bars').addClass('fa-xmark');
  $('.nav').addClass('bg-black');
  $('.dropdown-menu').addClass('bg-black');
});

// close navbar when hover outside of navbar area
$('.nav').mouseleave(function() {
  $(".dropdown-menu").removeClass('show');
  $('.nav').removeClass('bg-black');
  $('#dropdownMenuButton').removeClass('fa-xmark').addClass('fa-bars');
});

// only enable section scroll on PC mode
if ($(window).width() > 992) {
  docSlider.init({
    speed: 1000,
    pager: false
  });
}