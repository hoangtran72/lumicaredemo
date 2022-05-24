const PC_SCREENSIZE = 992;
const MOBILE_SCREENSIZE = 576;

// change video size when on mobile
if ($(window).width() < MOBILE_SCREENSIZE) {
  $("#about-video-div").removeClass('embed-responsive-21by9').addClass('embed-responsive-1by1');
}

if ($(window).width() >= PC_SCREENSIZE) {
  $(".navbar").hover(function() {
    $('#navbar-area').addClass("show");
    $('#hamburger-icon').removeClass("fa-bars").addClass("fa-close");
  });


  $(".navbar").mouseleave(function() {
    $('#navbar-area').removeClass("show");
    $('#hamburger-icon').removeClass("fa-close").addClass("fa-bars");
  });
} else {
  $('#hamburger-icon').click(function() {
    $('#hamburger-icon').toggleClass("fa-bars fa-close")
  });
}