const apiKey = '1225c612738eb02d4dc61118aca6d3f8'; 
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    const city = document.getElementById('search').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather:', error);
        });
}

function displayWeather(data) {
    document.getElementById('city').textContent = data.name;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind: ${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    document.getElementById('icon').src = iconUrl;
}
