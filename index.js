const apiKey = "a91d7f3a149aed3533e5bff2af2b8e75";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a91d7f3a149aed3533e5bff2af2b8e75


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // if (data.weather[0].main == "Clouds") {
    //     weatherIcon.src = "images/clouds.png";
    // }
    // else if (data.weather[0].main == "Rain") {
    //     weatherIcon.src = "images/rain.png";
    //     }
    //     else if (data.weather[0].main == "Clear") {
    //         weatherIcon.src = "images/clear.png";
    //         }
    //         else if (data.weather[0].main == "Drizzel") {
    //             weatherIcon.src = "images/drizzelDay.png";
    //             }
    //             else if (data.weather[0].main == "Mist") {
    //                 weatherIcon.src = "images/mist.png";
    //                 }

    // OR

    if(data.weather[0].main != null) {
        weatherIcon.src = "images/" + data.weather[0].main + ".png";
    }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

}
    }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})



