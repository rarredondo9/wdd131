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
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  console.log('menuToggle:', menuToggle);
  console.log('navMenu:', navMenu);

  menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked');
    navMenu.classList.toggle('open');
    console.log('navMenu classes:', navMenu.classList.toString());
    if(navMenu.classList.contains('open')) {
      menuToggle.innerHTML = '&times;';
    } else {
      menuToggle.innerHTML = '&#9776;';
    }
  });

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
