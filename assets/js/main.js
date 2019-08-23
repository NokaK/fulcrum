function mainFunctions() {
  // var originalBGplaypen = $("footer").css("background-color"),
  //   x,
  //   y,
  //   xy,
  //   bgWebKit,
  //   bgMoz,
  //   lightColor = "rgba(255,255,255,1)",
  //   gradientSize = 100;

  // Basic Demo
  // $("footer").mousemove(function(e) {
  //   x = e.pageX - this.offsetLeft;
  //   y = e.pageY - this.offsetTop;
  //   xy = x + " " + y;

  //   bgWebKit =
  //     "-webkit-gradient(radial, " +
  //     xy +
  //     ", 0, " +
  //     xy +
  //     ", " +
  //     gradientSize +
  //     ", from(" +
  //     lightColor +
  //     "), to(rgba(255,255,255,0.0))), " +
  //     originalBGplaypen;
  //   bgMoz =
  //     "-moz-radial-gradient(" +
  //     x +
  //     "px " +
  //     y +
  //     "px 45deg, " +
  //     lightColor +
  //     " 0%, " +
  //     originalBGplaypen +
  //     " " +
  //     gradientSize +
  //     "px)";

  //   $(this)
  //     .css({ background: bgWebKit })
  //     .css({ background: bgMoz });
  // });
  // .mouseleave(function() {
  //   $(this).css({ background: originalBGplaypen });
  // });

  if ($(window).width() > 1249) {
    $(".aboutus-container").css(
      "height",
      $(window).height() - $("header").height()
    );
    $(".features-container")
      .mouseup(function() {
        $(".scroll-container").css("z-index", "1000");
      })
      .mousedown(function() {
        $(".scroll-container").css("z-index", "auto");
      });
  } else {
    $(".aboutus-container").css("height", "auto");
    $(".features-container").off();
  }

  if ($(window).width() < 768) {
    $(".features-bottom-outside").addClass("accordion-features");
    $(".features-bottom-outside .feature-block-top ~ div").css(
      "display",
      "none"
    );
    $(".feature-block-top").off("click");
    $(".feature-block-top").on("click", function() {
      $(this)
        .next("div")
        .slideToggle();
      $(this)
        .children(".accordion-arr")
        .toggleClass("rotate-arrow");
    });
  } else {
    $(".features-bottom-outside").removeClass("accordion-features");
    $(".feature-block-top").off("click");
    $(".feature-block .feature-block-top ~ div").css("display", "block");
  }

  if ($(window).width() > 1249) {
    $(".features-container").css("height", $(window).height());
    $(".scroll-container div").css("height", $(".right-side-content").height());
    // $(".features-right-side").css(
    //   "width",
    //   $(window).width() - $(".features-left-side").width()
    // );
    $(".features-top-outside").css("height", $(".right-side-content").height());
    $(".features-bottom-outside").css(
      "height",
      $(".right-side-content").height()
    );
  } else {
    $(".features-container").css("height", "auto");
    $(".scroll-container div").css("height", "auto");
    // $(".features-right-side").css("width", "auto");
    $(".features-top-outside").css("height", "auto");
    $(".features-bottom-outside").css("height", "auto");
  }
}

$(function() {
  mainFunctions();

  var f$;
  var ff$;
  var fff$;
  var ffff$;

  var s$;
  var ss$;
  var sss$;
  var ssss$;

  $(".tab-link").on("click", function() {
    if (!$(this).hasClass("active-tab-link")) {
      $(".tab-link").removeClass("active-tab-link");
      $(this).addClass("active-tab-link");
    }
    if ($(".second-link").hasClass("active-tab-link")) {
      if (f$) clearTimeout(f$);
      if (ff$) clearTimeout(ff$);
      if (fff$) clearTimeout(fff$);
      if (ffff$) clearTimeout(ffff$);
      if (s$) clearTimeout(s$);
      if (ss$) clearTimeout(ss$);
      if (sss$) clearTimeout(sss$);
      if (ssss$) clearTimeout(ssss$);

      $(".tabs-container").removeClass("first-active");
      $(".tabs-container").addClass("second-active");

      $(".first-tab-in h1,.first-tab-in h3")
        .stop()
        .animate(
          {
            left: 200,
            opacity: 0
          },
          400
        );

      f$ = setTimeout(function() {
        $(".first-tab-in h1").css("left", "-100px");
        $(".first-tab-in h3").css("left", "-100px");
      }, 500);

      ff$ = setTimeout(function() {
        $(".second-tab-in h1,.second-tab-in h3")
          .stop()
          .animate(
            {
              opacity: 1,
              left: 0
            },
            400
          );
      }, 400);

      $(".first-tab-in div").css("opacity", "0");

      fff$ = setTimeout(function() {
        $(".first-tab-in div").css("bottom", "-30px");
      }, 500);

      ffff$ = setTimeout(function() {
        $(".second-tab-in div")
          .stop()
          .animate(
            {
              opacity: 1,
              bottom: 0
            },
            400
          );
      }, 300);

      $(".animation-img-second").fadeIn(200);
      $(".animation-img-first")
        .stop()
        .animate({
          display: "none"
        });
    } else {
      if (f$) clearTimeout(f$);
      if (ff$) clearTimeout(ff$);
      if (fff$) clearTimeout(fff$);
      if (ffff$) clearTimeout(ffff$);
      if (s$) clearTimeout(s$);
      if (ss$) clearTimeout(ss$);
      if (sss$) clearTimeout(sss$);
      if (ssss$) clearTimeout(ssss$);

      $(".tabs-container").removeClass("second-active");
      $(".tabs-container").addClass("first-active");
      $(".second-tab-in h1,.second-tab-in h3")
        .stop()
        .animate(
          {
            left: 200,
            opacity: 0
          },
          400
        );

      s$ = setTimeout(function() {
        $(".second-tab-in h1").css("left", "-100px");
        $(".second-tab-in h3").css("left", "-100px");
      }, 500);

      ss$ = setTimeout(function() {
        $(".first-tab-in h1,.first-tab-in h3")
          .stop()
          .animate(
            {
              opacity: 1,
              left: 0
            },
            400
          );
      }, 400);

      $(".second-tab-in div").css("opacity", "0");

      sss$ = setTimeout(function() {
        $(".second-tab-in div").css("bottom", "-30px");
      }, 500);

      ssss$ = setTimeout(function() {
        $(".first-tab-in div")
          .stop()
          .animate(
            {
              opacity: 1,
              bottom: 0
            },
            400
          );
      }, 300);

      $(".animation-img-second").fadeOut();
      $(".animation-img-first").fadeIn();
    }
  });

  $(".load-more-highlight").on("click", function(e) {
    e.preventDefault();
    $(".highlight-block").toggleClass("highlight-block-more", 600);
    if (
      $(this)
        .find("span")
        .text() == "show more"
    ) {
      $(this)
        .find("span")
        .text("less more");
      $(this)
        .find("img")
        .css("transform", "rotate(180deg)");
    } else {
      $(this)
        .find("span")
        .text("show more");
      $(this)
        .find("img")
        .css("transform", "rotate(0)");
    }
  });

  var targetOffset = $(".currency-shape").offset().top;
  var isVisible = false;

  var $w = $(window).scroll(function() {
    if ($w.scrollTop() > targetOffset) {
      if (!isVisible) {
        $(".first-tab-in div").animate({
          opacity: 1,
          bottom: 0
        });

        isVisible = true;
      }
    }
  });

  var iScrollPos = 0;

  var scrollF$;
  var scrollS$;
  $(".scroll-container").scroll(function() {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos < iScrollPos) {
      if (
        !$(".indicator")
          .first()
          .hasClass("selected")
      ) {
        $("html, body").animate(
          {
            scrollTop: $(".features-container").offset().top
          },
          200
        );
        firstFeaturesContainer();
      }
    } else {
      if (
        $(".indicator")
          .first()
          .hasClass("selected")
      ) {
        $("html, body").animate(
          {
            scrollTop: $(".features-container").offset().top
          },
          200
        );
        secondFeaturesContainer();
      }
    }
    iScrollPos = iCurScrollPos;
  });

  $(".scroll-indicator > .indicator")
    .eq(0)
    .click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".features-container").offset().top
        },
        200
      );
      firstFeaturesContainer();
    });

  $(".scroll-indicator > .indicator")
    .eq(1)
    .click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".features-container").offset().top
        },
        200
      );
      secondFeaturesContainer();
    });

  function firstFeaturesContainer() {
    if (scrollF$) clearTimeout(scrollF$);
    if (scrollS$) clearTimeout(scrollS$);

    // $(".change-bg").removeClass("upto");
    $(".features-first-slide").fadeIn(500);
    $(".features-second-slide").fadeOut(500);
    scrollF$ = setTimeout(function() {
      $(".fetures-titles h3:first-child")
        .stop()
        .animate(
          {
            height: 128,
            opacity: 1
          },
          400
        );
    }, 400);
    $(".fetures-titles h3:nth-child(2)")
      .stop()
      .animate(
        {
          opacity: 0,
          height: 0
        },
        400
      );
    $(".right-side-content").removeClass("upto-content");

    $(".scroll-indicator > .indicator")
      .eq(0)
      .addClass("selected");
    $(".scroll-indicator > .indicator")
      .eq(1)
      .removeClass("selected");

    $(this).scrollTop(0);
  }

  function secondFeaturesContainer() {
    if (scrollF$) clearTimeout(scrollF$);
    if (scrollS$) clearTimeout(scrollS$);

    // $(".change-bg").addClass("upto");
    $(".features-first-slide").fadeOut(500);
    $(".features-second-slide").fadeIn(500);
    $(".fetures-titles h3:first-child")
      .stop()
      .animate(
        {
          height: 0,
          opacity: 0
        },
        400
      );
    scrollS$ = setTimeout(function() {
      $(".fetures-titles h3:nth-child(2)")
        .stop()
        .animate(
          {
            opacity: 1,
            height: 128,
            bottom: 0
          },
          400
        );
    }, 400);
    $(".right-side-content").addClass("upto-content");

    $(".scroll-indicator > .indicator")
      .eq(1)
      .addClass("selected");
    $(".scroll-indicator > .indicator")
      .eq(0)
      .removeClass("selected");

    $(this).scrollTop(1080);
  }

  $(".burger-menu").on("click", function() {
    $("body").addClass("show-menu");
  });

  $(".close-menu-btn").on("click", function() {
    $("body").removeClass("show-menu");
  });

  $(window).resize(mainFunctions);

  var isDecImageActive = false;
  var decImageTimer = setInterval(function() {
    $("#decoration-img").toggleClass(
      "active",
      (isDecImageActive = !isDecImageActive)
    );
  }, 2500);

  var isDecFooterActive = false;
  var decFooterTimer = setInterval(function() {
    $("#footer-logo").toggleClass(
      "active",
      (isDecFooterActive = !isDecFooterActive)
    );
  }, 3000);
});

$('a[href^="#"]').on("click", function(e) {
  e.preventDefault();

  var target = this.hash;
  var $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top
      },
      1000,
      "swing"
    );
});

jQuery(document).ready(function() {
  $(window).scroll(function(e) {
    parallaxScroll();
  });

  function parallaxScroll() {
    if ($(window).scrollTop() < 500) {
      var scrolled = $(window).scrollTop();
      $("#parallax-bg-1").css({
        // left: 0 - scrolled * 0.15 + "px",
        top: 0 - scrolled * 0.05 + "px"
      });
      $("#parallax-bg-2").css({
        // right: 0 - scrolled * 0.05 + "px",
        top: scrolled * 0.05 + "px"
      });

      $(".about-us-parallax").css(
        "background-position-y",
        -scrolled * 0.02 + "px"
      );
    }
  }
});
// $(document).mousemove(function(event) {
//   windowWidth = $(window).width();
//   windowHeight = $(window).height();

//   mouseXpercentage = Math.round($(window).width() / 2 - event.pageX) * 0.1;
//   mouseYpercentage = Math.round($(window).height() / 2 - event.pageY) * 0.1;

//   $(".radial-gradient").css(
//     "background",
//     "radial-gradient(at " + event.pageX + "% " + event.pageY + "%, #fff, #000)"
//   );
// });

$(".pic").mousemove(function(event) {
  event.preventDefault();
  var upX = event.clientX;
  var upY = event.clientY;
  var mask = $("#mask1 circle")[0];
  mask.setAttribute("cy", upY - 280 + "px");
  mask.setAttribute("cx", upX + 20 + "px");
});
