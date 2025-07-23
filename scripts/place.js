
// currrent year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

//weather values
const temperature = 10; 
const windSpeed = 5;

function calculateWindChill(tempC, speedKmh) {
    return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16)).toFixed(1);
}

// Windchill
const windChillElement = document.querySelector(".weather-box p:last-child"); 

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChill} °C`;
} else {
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
}
