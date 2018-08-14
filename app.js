
// Init storage
const storage = new Storage();
// Get stored location data 
const weatherLocation = storage.getLocationData();
// Init Weather class
const weather = new Weather(weatherLocation.city,weatherLocation.state);
// init UI
const ui = new UI();
// Change location
document.getElementById('w-change-btn').addEventListener('click',(e)=>
    {
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        // Change location
        weather.changeLocation(city,state);
        // Set in LS
        storage.setLocationData(city,state);

        // Get and display weather
        getWeather();

        // close
        $('#locModal').modal('hide');
    }
);

// Weather on DOM LOAD
document.addEventListener('DOMContentLoaded', getWeather);
// getWeather
function getWeather() {weather.getWeather()
    .then (results=>{
       ui.paint(results);
    })
    .catch(err=>console.log(err));
}

