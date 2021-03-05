class UI
{
    constructor(){
this.location=document.getElementById("w-location");
this.desc=document.getElementById("w-desc");
this.string=document.getElementById("w-string");
this.icon=document.getElementById("w-icon");
this.details=document.getElementById("w-details");
this.humidity=document.getElementById("w-humidity");
this.feelslike=document.getElementById("w-feels-like");
this.wind=document.getElementById("w-wind");
    };
    paint(weather){
       this.location.textContent=weather.name;
       this.desc.textContent=weather.weather[0].main;
       this.string.textContent=String(weather.main.temp)+" C";
       const iconURL="http://openweathermap.org/img/w/" +weather.weather[0].icon + ".png"
       this.icon.setAttribute("src",iconURL);
       this.humidity.textContent=`Humidity: ${weather.main.humidity} %`;
       this.feelslike.textContent=`Feels Like: ${weather.main.feels_like} C`;
       this.wind.textContent=`Wind Speed: ${weather.wind.speed}`;
       
    
}}