import { getWeatherData } from './weather.js';

// DOM Elements
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const timezone = document.getElementById('time-zone'); // Added the missing DOM element
const countryEl = document.getElementById('country'); // Added the missing DOM element
const currentWeatherItemsEl = document.getElementById('current-weather-items'); // Added the missing DOM element
const currentTempEl = document.getElementById('current-temp');
const weatherForecastEl = document.getElementById('weather-forecast');

// Constants
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';

// Function to update date and time
function updateDateTime() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeElement.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`;

    dateElement.innerHTML = days[day] + ', ' + date + ' ' + months[month];
}

function showWeatherData(data) {
    let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;

    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N ' + data.lon + 'E';

    currentWeatherItemsEl.innerHTML = `
        <h2>Today's Weather stats</h2>
        <div>-----------------------------------</div>
        <div class="weather-item">
            <div>Humidity</div>
            <div>${humidity}%</div>
        </div>
        <div class="weather-item">
            <div>Pressure</div>
            <div>${pressure}</div>
        </div>
        <div class="weather-item">
            <div>Wind Speed</div>
            <div>${wind_speed}</div>
        </div>
        <div class="weather-item">
            <div>Sunrise</div>
            <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
        </div>
        <div class="weather-item">
            <div>Sunset</div>
            <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
        </div>
    `;

    let otherDayForcast = '';
    data.daily.forEach((day, idx) => {
        if (idx === 0) {
            currentTempEl.innerHTML = `
                <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
                <div class="other">
                    <h2>Today's Temperature</h2>
                    <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
                    <div class="temp">Night - ${day.temp.night}&#176;F</div>
                    <div class="temp">Day - ${day.temp.day}&#176;F</div>
                </div>
            `;
        } else {
            otherDayForcast += `
                <div class="weather-forecast-item">
                    <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                    <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                    <div class="temp">Night - ${day.temp.night}&#176;F</div>
                    <div class="temp">Day - ${day.temp.day}&#176;F</div>
                </div>
            `;
        }
    });

    weatherForecastEl.innerHTML = otherDayForcast;
}

setInterval(updateDateTime, 1000);

window.addEventListener('load', () => {
    // Initialize the page
    getWeatherData(API_KEY)
        .then((data) => {
            showWeatherData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle the error, e.g., display an error message to the user
        });
});