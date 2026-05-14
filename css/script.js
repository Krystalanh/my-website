/*SCROLL SMOOTHNESS*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
};
window.onscroll = function() {
  const nav = document.querySelector("nav");
  if (window.pageYOffset > 10) {
    nav.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
  } else {
    nav.style.boxShadow = "none";
  }
};