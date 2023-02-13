const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".nav-menu");

// =======this will show the X and menu============

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
