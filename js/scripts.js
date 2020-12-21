// HAMBURGER SLIDE ANIMATION
const menuSlide = () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu-links");

  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");
  });
};

//CALL FUNCTIONS

//Menu slide
menuSlide();
