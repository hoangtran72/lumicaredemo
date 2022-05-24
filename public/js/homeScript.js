// only enable section scroll on PC mode
if ($(window).width() >= PC_SCREENSIZE) {
    docSlider.init({
      speed: 1500,
      pager: false
    });
  }