$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
    $(".red-box").fadeOut(2000);
    $(".red-box").fadeIn(1000);
    $(".red-box").fadeTo(1000, 0.5);
    $(".green-box").fadeOut(4000);
    $(".blue-box").fadeTo(4000, 0.25);

    $(".blue-box").fadeToggle(1000);
    $(".red-box").fadeIn(1000);
    $(".blue-box").fadeIn(1000);
    $(".blue-box").fadeTo(1000, 1.0);
    $(".green-box").fadeIn(1000);
    $(".green-box").fadeTo(1000, 0);

});
