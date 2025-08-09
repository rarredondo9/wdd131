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
    // ===== Hamburguer =====
  const menuToggle = document.getElementById("hamburguer");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }
  // ===== Feedback Form Recipes =====
  const recipes = [
    { id: "banana-cake", name: "Banana Cake" },
    { id: "charcuterie", name: "Charcuterie Board" },
    { id: "cheesecake", name: "Raspberry Cheesecake" },
  ];

  const select = document.getElementById("recipe");
  if (select) {
    recipes.forEach(recipe => {
      const option = document.createElement("option");
      option.value = recipe.id;
      option.textContent = recipe.name;
      select.appendChild(option);
    });
  }

  // ===== Feedback Counter =====
  const counterMsg = document.getElementById("counterMsg");
  if (counterMsg) {
    let count = parseInt(localStorage.getItem("feedbackCount")) || 0;
    count++;
    localStorage.setItem("feedbackCount", count);
    counterMsg.textContent = `You have submitted ${count} feedback(s).`;
  }
});
