$(function () {
  $(".header-sp-icon-wrap").click(function () {
    if ($(".header-sp-icon-wrap").hasClass("is-open")) {
      $(".header-sp-icon-wrap").removeClass("is-open");
      $(".header-sp-nav").css("display", "none");
    } else {
      $(".header-sp-icon-wrap").addClass("is-open");
      $(".header-sp-nav").css("display", "block");
    }
  });
});
