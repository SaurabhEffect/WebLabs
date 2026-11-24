$(document).ready(function () {
  // Original functionality
  $(".loading").height($(window).height());
  $(".loading").width($(window).width());

  // Enhanced cursor movement
  $(window).mousemove(function (e) {
    "use strict";
    $(".original").css({
      left: e.pageX - 16,
      top: e.pageY - 16,
    });
  });

  // Rainbow cursor with auto-fade
  var colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#fdd835",
    "#ff9f43",
    "#a55eea",
  ];
  var colorIndex = 0;

  $("body").on("click", function (e) {
    "use strict";
    var clone = $(".original")
      .clone(true)
      .appendTo("body")
      .css({
        left: e.pageX - 16,
        top: e.pageY - 16,
        backgroundColor: colors[colorIndex % colors.length],
        boxShadow: "0 0 15px " + colors[colorIndex % colors.length],
      })
      .removeClass("original");

    colorIndex++;

    // Auto-remove after 3 seconds with fade
    setTimeout(function () {
      clone.fadeOut(500, function () {
        clone.remove();
      });
    }, 3000);
  });

  // Loading progress simulation
  var progress = 0;
  var loadingInterval = setInterval(function () {
    progress += Math.random() * 8 + 2; // Random increment between 2-10
    if (progress > 100) progress = 100;

    $("#progressBar").animate({ width: progress + "%" }, 200);
    $("#percentage").text(Math.floor(progress) + "%");

    if (progress >= 100) {
      clearInterval(loadingInterval);
      // Hide loading screen after completion
      setTimeout(function () {
        $(".loading").fadeOut(1000);
      }, 1500);
    }
  }, 400);

  // Create floating particles
  function createParticle() {
    var particle = $('<div class="particle"></div>');
    var leftPos = Math.random() * $(window).width();
    var animationDuration = Math.random() * 3 + 2; // 2-5 seconds
    var size = Math.random() * 4 + 2; // 2-6px

    particle.css({
      left: leftPos + "px",
      bottom: "-10px",
      width: size + "px",
      height: size + "px",
      animationDuration: animationDuration + "s",
    });

    $(".particles").append(particle);

    // Remove particle after animation
    setTimeout(function () {
      particle.remove();
    }, animationDuration * 1000);
  }

  // Generate particles continuously
  setInterval(createParticle, 300);
});
