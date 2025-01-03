// General
const API_KEY = "6ab9ff8701516ad788b22be4fd93b362";
const DEFAULT_VALUE = "__";

// Weather status
const searchInput = document.getElementById("search");

const time = document.querySelector(".time");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const temperature = document.querySelector(".temperature");
const feel = document.querySelector(".feel-like");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

const country = document.querySelector(".country");

// Fetch data
searchInput.addEventListener("change", (event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=en&units=metric`)
    .then((response) => response.json())
    .then((data) => {
        // Return error messages
        if (data.cod == '404') {
            alert('Cannot find the city');
            return;
        }
        else if (data.cod == '429') {
            alert('Wait for a moment');
            return;
        }

        // Return data
        time.innerHTML = new Date(data.dt * 1000).toLocaleTimeString() || DEFAULT_VALUE;
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
        feel.innerHTML = Math.round(data.main.feels_like) || DEFAULT_VALUE;

        sunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString() || DEFAULT_VALUE;
        sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString() || DEFAULT_VALUE;
        humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
        windSpeed.innerHTML = Math.round(data.wind.speed) || DEFAULT_VALUE;

        country.innerHTML = data.sys.country || DEFAULT_VALUE;
    })
})