class Weather{
 constructor(city){
     this.apikey="0ffcd2ca6691f6419603465db6fef2cd";
this.city=city;
 }
 async getWeather(){
     const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apikey}`);
     const weatherData=await response.json();
     return weatherData;

 }
 changeLocation(city){
this.city=city;
 }
}