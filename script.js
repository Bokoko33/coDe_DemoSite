$(function () {
  $(".header-sp-icon-wrap").click(function () {
    if ($(".header-sp-icon-wrap").hasClass("is-open")) {
      $(".header-sp-icon-wrap").removeClass("is-open");
      $(".header-sp-nav").css("display", "none");

      $("html,body").removeAttr("style");
      $(window).off("touchmove.noscroll");
    } else {
      $(".header-sp-icon-wrap").addClass("is-open");
      $(".header-sp-nav").css("display", "block");

      $("html,body").css("overflow", "hidden");
      $(window).on("touchmove", function (event) {
        event.preventDefault();
      });
    }
  });

  $(".header-sp-nav").click(function () {
    if ($(".header-sp-icon-wrap").hasClass("is-open")) {
      $(".header-sp-nav").css("display", "none");
      $(".header-sp-icon-wrap").removeClass("is-open");

      $("html,body").removeAttr("style");
      $(window).off("touchmove.noscroll");
    }
  });
});
