//Initialize Storage object
const storage=new Storage();

//Get stored location data
const weatherLocation=storage.getLocationData();

//Initialize Weather object
const weather=new Weather(weatherLocation.city, weatherLocation.state);

//Intialize UI object
const ui=new UI();
//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city=document.getElementById('city').value;
  const state=document.getElementById('state').value;

  //Change location
  weather.changeLocation(city, state);

  //Set location in Local Storage
  storage.setLocationData(weather.city, weather.state);
  
  //Get and display weather
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
});
function getWeather(){
  weather.getWeather()
  .then(results=> {
    ui.paint(results);
  })
  .catch(err=>console.log(err));
}

