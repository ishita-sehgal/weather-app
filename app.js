//init storage object
const storage=new Storage();
const weatherData=storage.getLocationData();
const weather=new Weather(weatherData);
//init UI
const ui=new UI();
//get weather on DOM load
document.addEventListener("DOMContentLoaded",getWeatherData);
//change location in UI
document.getElementById("w-change-btn").addEventListener("click",()=>{
    const city=document.getElementById("city").value;
    weather.changeLocation(city);
    getWeatherData();
    storage.setLocationData(city);

    //close the Modal
    // $('#locModal').modal('hide');
})


//GET WEATHER DATA OF LOCATION
function getWeatherData(){
weather.getWeather()
.then(data=>ui.paint(data))
.catch(error=>console.log(error));
};
