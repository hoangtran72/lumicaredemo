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

if ($(window).width() > 992) {
  docSlider.init({
    speed: 1000,
    pager: false
  });
}