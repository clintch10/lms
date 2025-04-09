// NAVBAR BACKGROUND ANIMATION ON SCROLL
$(function () {
    $(document).scroll(function () {
      var $nav = $(".page-navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });
  // END OF NAVBAR BACKGROUND ANIMATION ON SCROLL