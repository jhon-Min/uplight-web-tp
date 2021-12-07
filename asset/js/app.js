$(document).ready(function () {
  let screenHeight = $(window).height();

  $(window).scroll(function () {
    let current = $(this).scrollTop();
    console.log(current);
    if (current > screenHeight - 105) {
      $(".navbar").addClass("site-nav");
    } else {
      $(".navbar").removeClass("site-nav");
      setActive("home");
    }
  });
});

$(".navbar-toggler").click(function () {
  let result = $(".navbar-collapse").hasClass("hello");

  if (result) {
    $(".menu-icon").removeClass("feather-menu").addClass("feather-x");
    $(".navbar-collapse").removeClass("hello");
  } else {
    $(".menu-icon").removeClass("feather-x").addClass("feather-menu");
    $(".navbar-collapse").addClass("hello");
  }
});

function setActive(x) {
  $(".nav-link").removeClass("nav-active");
  $(`.nav-link[href='#${x}']`).addClass("nav-active");
}

function navScroll() {
  let currentSection = $("div[id]");
  currentSection.waypoint(
    function (direction) {
      if (direction == "down") {
        let currentSection = $(this.element).attr("id");
        console.log("down", currentSection);
        setActive(currentSection);
      }
    },
    { offset: "70px" }
  );

  currentSection.waypoint(
    function (direction) {
      if (direction == "up") {
        let currentSection = $(this.element).attr("id");
        console.log("up", currentSection);
        setActive(currentSection);
      }
    },
    { offset: "70px" }
  );
}

navScroll();
