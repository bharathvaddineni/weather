const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherData = document.getElementById("weatherData");
const weather1 = document.getElementsByClassName("weather1")[0];
const weather2 = document.getElementsByClassName("weather2")[0];
const weather3 = document.getElementsByClassName("weather3")[0];

const apiKey = "b1dc534905387344874a631c0ec8fbc0"; // Replace with your API key

searchButton.addEventListener("click", () => {
    const cityName = cityInput.value;
    if (cityName) {
        cityInput.value="";
        fetchWeatherData(cityName);
    }
});

function fetchWeatherData(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayWeatherData(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

function displayWeatherData(data) {
    const city = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const feels_like = data.main.feels_like
    const humidity = data.main.humidity
    const cloudicon = document.getElementById("cloud")
    var weatherHTML = `
        <h2>${city}</h2>`;
        weather1.innerHTML = weatherHTML;

    weatherHTML =`
    <p>${description}</p>
        <p>Temperature: ${temperature}°C</p>`;
        

        weather2.innerHTML = weatherHTML;
        
    weatherHTML =`
    <p>Feels like: ${feels_like}°C</p>
        <p>Humidity: ${humidity}°C</p>
    `;

    
    weather3.innerHTML = weatherHTML;
}
