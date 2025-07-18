// currrent year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

//Hamburguer menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  menuToggle.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});