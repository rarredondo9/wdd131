// current year
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");
if (yearElement) {
  yearElement.textContent = currentYear;
}

// last modified date
const lastModified = document.lastModified;
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
  lastModifiedElement.textContent = `Last Modification: ${lastModified}`;
}

// products
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

window.addEventListener("DOMContentLoaded", () => {
  // Only populate the select if it exists (form.html)
  const select = document.getElementById("product");
  if (select) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
  }

  // Only run counter logic if on review.html
  const counterElement = document.getElementById("counterMsg");
  if (counterElement) {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    counterElement.textContent = `You have submitted ${count} review(s).`;
  }
});
