document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
});

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const locationElement = document.getElementById('location');

    // Get the weather data for the provided city (you would need a weather API for this part)
    // For demonstration purposes, let's assume the city is directly set in the location element.
    const city = cityInput.value || 'City';
    locationElement.textContent = `${city}, Country`;

    // Additional logic to fetch and display actual weather data goes here
    // You'll need to integrate with a weather API for this functionality.
    // The OpenWeatherMap API is commonly used for weather data.
    // Example: https://openweathermap.org/api
}
