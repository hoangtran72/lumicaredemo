const PC_SCREENSIZE = 992;
const MOBILE_SCREENSIZE = 576;

// change video size when on mobile
if ($(window).width() < MOBILE_SCREENSIZE) {
  $("#about-video-div").removeClass('embed-responsive-21by9').addClass('embed-responsive-1by1');
}

if ($(window).width() >= PC_SCREENSIZE) {
  $(".navbar").hover(function() {
    $('#navbarArea').addClass("show");
    $('#hamburger-icon').removeClass("fa-bars").addClass("fa-xmark");
  });


  $(".navbar").mouseleave(function() {
    $('#navbarArea').removeClass("show");
    $('#hamburger-icon').removeClass("fa-xmark").addClass("fa-bars");
  });
} else {
  $('#hamburger-icon').click(function() {
    $('#hamburger-icon').toggleClass("fa-bars fa-xmark")
  });
}

// only enable section scroll on PC mode
if ($(window).width() >= PC_SCREENSIZE) {
  docSlider.init({
    speed: 1000,
    pager: false
  });
}