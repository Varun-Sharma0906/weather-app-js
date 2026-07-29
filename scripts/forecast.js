const key = 'YOUR_API_KEY_HERE';

const getCity = async(city) => {
    const base = 'http://api.openweathermap.org/geo/1.0/direct';
    const query = `?q=${city}&appid=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data);
};
getCity('delhi');