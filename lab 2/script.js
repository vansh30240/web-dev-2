const apiKey = "ca33c8e428c2837ba9af699d71de0c49";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");
const historyDiv = document.getElementById("history");


searchBtn.addEventListener("click", function () {

    let city = cityInput.value.trim();

    if (city === "") {
        weatherResult.innerHTML = "Please enter a city name";
        return;
    }

    getWeather(city);

});



async function getWeather(city) {

    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        const data = await response.json();


        if (data.cod !== 200) {

            weatherResult.innerHTML = "<p style='color:red'>City not found</p>";
            return;

        }

        displayWeather(data);

        saveHistory(city);

    }
    catch (error) {

        weatherResult.innerHTML = "<p style='color:red'>Network Error</p>";

    }

}



function displayWeather(data) {

    weatherResult.innerHTML = `
<div class="weather-row">
<span>City</span>
<span>${data.name}, ${data.sys.country}</span>
</div>

<div class="weather-row">
<span>Temp</span>
<span>${data.main.temp} °C</span>
</div>

<div class="weather-row">
<span>Weather</span>
<span>${data.weather[0].main}</span>
</div>

<div class="weather-row">
<span>Humidity</span>
<span>${data.main.humidity}%</span>
</div>

<div class="weather-row">
<span>Wind</span>
<span>${data.wind.speed} m/s</span>
</div>
`;

}



function saveHistory(city) {

    let history = JSON.parse(localStorage.getItem("cities")) || [];

    if (!history.includes(city)) {

        history.push(city);

        localStorage.setItem("cities", JSON.stringify(history));

    }

    loadHistory();

}



function loadHistory() {

    historyDiv.innerHTML = "";

    let history = JSON.parse(localStorage.getItem("cities")) || [];

    history.forEach(function (city) {

        let btn = document.createElement("span");

        btn.className = "history-item";

        btn.innerText = city;

        btn.onclick = function () {
            getWeather(city);
        };

        historyDiv.appendChild(btn);

    });

}



loadHistory();



// Example of Promise (.then / .catch)

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => console.log("Promise example:", data))
    .catch(err => console.log(err));