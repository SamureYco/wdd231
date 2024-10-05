document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    yearSpan.textContent = new Date().getFullYear();

    fetchWeatherData();
    fetchSpotlightData();
});

// Simulación de obtención de datos de clima
async function fetchWeatherData() {
    const weatherContainer = document.getElementById("weather-data");
    try {
        // Simulación de respuesta
        const data = {
            name: "London",
            main: { temp: 15 },
            weather: [{ description: "Clear sky" }]
        };

        weatherContainer.innerHTML = `
            <p>Location: ${data.name}</p>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherContainer.innerHTML = `<p>Error fetching weather data.</p>`;
    }
}

// Simulación de obtención de datos de miembros destacados
async function fetchSpotlightData() {
    const spotlightContainer = document.getElementById("spotlight-members");
    try {
        const response = await fetch('data/members.json'); // Cambia la ruta si es necesario
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        spotlightContainer.innerHTML = data.map(member => `
            <div class="spotlight-member">
                <img src="${member.logo}" alt="${member.name} Logo" style="width: 100px; height: auto;">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error fetching spotlight data:", error);
        spotlightContainer.innerHTML = `<p>Error fetching spotlight data.</p>`;
    }
}

