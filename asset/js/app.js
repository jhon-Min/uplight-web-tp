$(document).ready(function () {
  let screenHeight = $(window).height();
  console.log(screenHeight);

  $(window).scroll(function () {
    let current = $(this).scrollTop();
    // console.log(current);

    if (current > screenHeight - 100) {
      $(".navbar").addClass("site-nav");
    } else {
      $(".navbar").removeClass("site-nav");
    }
  });
});
