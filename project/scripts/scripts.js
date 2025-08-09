document.addEventListener("DOMContentLoaded", () => {
  // ===== Current Year =====
  const currentYearElem = document.getElementById("currentyear");
  if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
  }

  // ===== Last Modified Date =====
  const lastModifiedElem = document.getElementById("lastModified");
  if (lastModifiedElem) {
    lastModifiedElem.textContent = `Last Modification: ${document.lastModified}`;
  }

  // ===== Hamburger Menu =====
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");

  menuToggle.textContent = mainNav.classList.contains("open") ? "✖" : "☰";
});

  // ===== Feedback Form =====
  const recipes = [
    { id: "banana-cake", name: "Banana Cake" },
    { id: "charcuterie", name: "Charcuterie Board" },
    { id: "cheesecake", name: "Raspberry Cheesecake" },
  ];

  // Populate recipe select menu
  const select = document.getElementById("recipe");
  if (select) {
    recipes.forEach(recipe => {
      const option = document.createElement("option");
      option.value = recipe.id;
      option.textContent = recipe.name;
      select.appendChild(option);
    });
  }

  // Thank You page submission counter
  const counterMsg = document.getElementById("counterMsg");
  if (counterMsg) {
    let count = parseInt(localStorage.getItem("feedbackCount")) || 0;
    count++;
    localStorage.setItem("feedbackCount", count);
    counterMsg.textContent = `You have submitted ${count} feedback(s).`;
  }
});
