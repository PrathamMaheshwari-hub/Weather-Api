const btn = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("temperature");
const weatherType = document.getElementById("airquality");
const hideDiv = document.querySelector(".hide");


async function getdata(city){
    const response = await fetch(` http://api.weatherapi.com/v1/current.json?key=b591939477f142f587140525261901&q=${city}&aqi=yes`);
       console.log(response);                           
      return await response.json();
}     
 btn.addEventListener("click", async ()=> {
   const city = cityInput.value;
   const result = await   getdata(city);

    cityName.innerText = `${result.location.country}`;
    temp.innerText = `${result.current.temp_c}°C`;
    weatherType.innerText = `${result.current.air_quality.co}`;

});

