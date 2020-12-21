//GLOBAL VARIABLES

// NAV SLIDE ANIMATION
const menuSlide = () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu-links");
  const topLine = document.querySelector(".line1");
  const middleLine = document.querySelector(".line2");
  const bottomLine = document.querySelector(".line3");

  burger.addEventListener("click", () => {
    //show 'x' toggle
    middleLine.classList.toggle("menu-open-middle");
    topLine.classList.toggle("menu-open-top");
    bottomLine.classList.toggle("menu-open-bottom");

    // nav bar slides open to the left
    menu.classList.toggle("nav-active");
  });
};

//CALL FUNCTIONS

//Menu slide
menuSlide();
