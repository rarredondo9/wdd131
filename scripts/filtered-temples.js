// Set current year in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Set last modified date in footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// Temples array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Syracuse Utah",
    location: "Syracuse, Utah, United States",
    dedicated: "2025, June, 8",
    area: 89000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/syracuse-utah-temple/syracuse-utah-temple-60529-main.jpg"
  },
  {
    templeName: "Taylorsville Utah",
    location: "Taylorsville, Utah, United States",
    dedicated: "2024, June, 2",
    area: 55000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/taylorsville-utah-temple/taylorsville-utah-temple-44959-main.jpg"
  },
  {
    templeName: "Quito Ecuador",
    location: "Cumbayá, Ecuador",
    dedicated: "2025, May, 25",
    area: 15000,
    imageUrl:
       "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
  }
];

// DOM elements
const albumSection = document.querySelector(".album");
const navLinks = document.querySelectorAll("nav a");

// Temple card
function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;

  figure.appendChild(img);
  figure.appendChild(caption);
  return figure;
}

// list of temples
function displayTemples(templeArray) {
  albumSection.innerHTML = ""; 
  templeArray.forEach(temple => {
    albumSection.appendChild(createTempleCard(temple));
  });
}

// Filter temples based on nav link
function filterTemples(category) {
  let filtered = [];

  switch (category.toLowerCase()) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

// Hook up nav link filters
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = link.textContent.trim();
    filterTemples(category);
  });
});

// Initial full display
displayTemples(temples);
