$(document).ready(function () {
  // start animate navigation
  $(window).on("scroll", function (e) {
    var scrollT = $(window).scrollTop();
    if (scrollT >= 250) {
      $(".navigation").addClass("effect-nav");
    } else {
      $(".navigation").removeClass("effect-nav");
    }
    // end animate navigation

    // start scrollY
    if (scrollT >= 500) {
      $("#Go-top").addClass("scrollT");
    } else {
      $("#Go-top").removeClass("scrollT");
    }
    // end scrollY
  });

  // start mobile navigation
  $(".close-f").on("click", function () {
    $(".faded").fadeToggle("slow");
  });
  $(".pos-one").on("click", function () {
    $(".pos-tow").fadeToggle("slow");
  });
  $(".pos-tow").on("click", function () {
    $(this).fadeToggle("slow");
  });
  // end mobile navigation

  $("#Go-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#top-s").offset().top
      },
      2000
    );
  });
  $(".navigation ul li a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("data-scroll")).offset().top
      },
      1000
    );
  });

  // start scroll-buttom
  $("#scroll-buttom").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#sectionOne").offset().top - 100
      },
      1000
    );
  });
  // end scroll-buttom

  // start shuffle

  $("#sectionFive ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("#sectionFive ul li").on("click", function () {
    const V = $(this).attr("data-filter");
    switch (V) {
      case ".All":
        $(".item-shuff").show(700, function () {
          $(this).children($("a")).attr("data-lightbox", "10");
        });
        break;
      default:
        $(".item-shuff")
          .not()
          .hide(700, function () {
            $(this).children($("a")).removeAttr("data-lightbox");
          });
        $(".item-shuff")
          .filter(V)
          .show(700, function () {
            $(this).children($("a")).attr("data-lightbox", "10");
          });
    }
  });

  lightbox.option({
    resizeDuration: 200,
    disableScrolling: true,
    wrapAround: true
  });

  // end shuffle

  /* start function owl carousel */
  $("#owl-demo").owlCarousel({
    singleItem: true,
    autoplay: true,
    loop: true,
    items: 1
  });
  /* end function owl carousel */

  new WOW().init();
  // End
});
