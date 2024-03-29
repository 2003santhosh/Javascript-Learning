const apikey = "00f2ee102ecf3f5b4b65a7c74b939bab"

const weatherDataEl = document.getElementById("weather-data")

const cityInputEl = document.getElementById("city-input")

const formEl = document.querySelector('form')

formEl.addEventListener('submit',(event) => {
    event.preventDefault()
    const cityvalue = cityInputEl.value;
    getWeatherData(cityvalue)
}
)

async function getWeatherData(cityvalue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid= ${apikey}&units=metric`);
        if (!response.ok){
            throw new Error("Network response was not ok")
        }
        const data = await response.json();

        const temperature = Math.round(data.main.temp);

        const description  = data.weather[0].description;

        const icon = data.weather[0].icon

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`

        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`

        weatherDataEl.querySelector(".description").textContent = description;

        weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");


    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = "";

        weatherDataEl.querySelector(".temperature").textContent = "";

        weatherDataEl.querySelector(".description").textContent = "An error happened, please try again";

        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}



