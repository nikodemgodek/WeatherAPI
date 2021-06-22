const button = document.querySelector('.button-search');
const inputVal = document.querySelector('.inputVal');

const country = document.querySelector('#country'); //miasto
const lat = document.querySelector('#lat'); //szerokosc
const lon = document.querySelector('#lon'); //dlugosc
const gust_kph = document.querySelector('#gust_kph');//poryw wiatru
const humidity = document.querySelector('#humidity');//wilgotność
const pressure_mb = document.querySelector('#pressure_mb');//cisnienie
const temp_c = document.querySelector('#temp_c');//tempa
const uv = document.querySelector('#uv');//niewiem
const wind_dir = document.querySelector('#wind_dir');//kierunek wiatru
const wind_kph = document.querySelector('#wind_kph'); //wiatr
const vis = document.querySelector('#vis'); //widoczność
const desc = document.querySelector('#desc');

const weatherIco = document.querySelector(".weatherIco");

weatherByCity("Wroclaw");

button.addEventListener('click', () => {
    weatherByCity(inputVal.value);
});

function weatherByCity(city) {
    fetch('http://api.weatherapi.com/v1/current.json?key=c7a5cfcf2fee4ecfbf0101921212206&q=' + city)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        var nameVal = data['location']['name'];
        var descVal = data['current']['condition']['text'];
        var lonVal = data['location']['lon'];
        var latVal = data['location']['lat'];

        var gustVal = data['current']['gust_kph'];
        var humidityVal = data['current']['humidity'];
        var pressureVal = data['current']['pressure_mb'];
        var tempVal= data['current']['temp_c'];
        var uvVal = data['current']['uv'];
        var wind_dirVal = data['current']['wind_dir'];
        var wind_speedVal= data['current']['wind_kph'];
        var visVal = data['current']['vis'];
        
        country.innerHTML = nameVal;
        desc.innerHTML = descVal;
        lon.innerHTML = lonVal; 
        lat.innerHTML = latVal;
        gust_kph.innerHTML = gustVal + " m/s";
        humidity.innerHTML = humidityVal + "%";
        pressure_mb.innerHTML = pressureVal+ " hPa";
        temp_c.innerHTML = tempVal + "°C";
        uv.innerHTML = uvVal;
        wind_dir.innerHTML = wind_dirVal;
        wind_kph.innerHTML = wind_speedVal+ " km/h";

        var img = document.querySelector('#weatherIco');
        img.src = data['current']['condition']['icon'];

    })
    .catch(err => alert("Wrong city name"))
}