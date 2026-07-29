const key = 'YOUR_API_KEY_HERE';

const getCity = async(city) => {
    const base = 'http://api.openweathermap.org/geo/1.0/direct';
    const query = `?q=${city}&appid=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

const getWeather = async(lat,lon) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?lat=${lat}&lon=${lon}&appid=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data;
};