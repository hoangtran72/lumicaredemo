// display navbar when hover over hamburger menu
$('#dropdownMenuButton').hover(function() {
  $(".dropdown-menu").addClass('show');
  $('#dropdownMenuButton').removeClass('fa-solid fa-bars').addClass('fa-solid fa-xmark');
  $('.nav').addClass('bg-black');
  $('.dropdown-menu').addClass('bg-black');
});

// close navbar when hover outside of navbar area
$('.nav').mouseleave(function() {
  $(".dropdown-menu").removeClass('show');
  $('.nav').removeClass('bg-black');
  $('#dropdownMenuButton').removeClass('fa-solid fa-xmark').addClass('fa-solid fa-bars');
});