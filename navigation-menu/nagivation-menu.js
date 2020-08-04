const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function() {
  const toggleAttribute = "active";
  const menuActive = menu.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", !menuActive);
  menu.classList.toggle(toggleAttribute);
})