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
  const isVisible = navMenu.style.display === "flex";
  navMenu.style.display = isVisible ? "none" : "flex";
  menuToggle.textContent = isVisible ? "☰" : "✖";
});