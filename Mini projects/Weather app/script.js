const apikey = "43e5b408456825459313cff88d9cc59d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather? units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    
          if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/414/414927.png";
          }
          else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "https://www.flaticon.com/free-icon/clear-sky_7865939";
          }
            
          else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "https://www.flaticon.com/free-icon/rain_4834677";
          }
          else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/5345/5345821.png";
          }
          
          else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2910/2910067.png";
          }
    
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
    }


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})