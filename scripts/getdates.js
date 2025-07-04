// currrent year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;