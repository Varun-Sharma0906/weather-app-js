const form = document.querySelector('form');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const card = document.querySelector('.card');


const getInfo = async(city) => {
    const cityInfo = await getCity(city);
    const weatherInfo = await getWeather(cityInfo.lat,cityInfo.lon);
    return {cityInfo,weatherInfo};
}

const updateUI = (data) => {
    const cityInfo = data.cityInfo;
    const weatherInfo = data.weatherInfo;
    details.innerHTML = `
     <div class="text-muted text-uppercase text-center details">
        <h5 class="my-3">${cityInfo.name}</h5>
        <div class="my-3 mt-4 fs-3">${weatherInfo.weather[0].main}</div>
        <div class="display-4 my-4">
            <span>${(weatherInfo.main.temp - 273.150).toFixed(1)}</span>
            <span>&deg;C</span>
        </div>
    </div>`;
        
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    if(weatherInfo.dt >= weatherInfo.sys.sunrise && weatherInfo.dt < weatherInfo.sys.sunset){
        time.setAttribute('src','img/day.svg');
    }
    else{
        time.setAttribute('src','img/night.svg');
    }
    // console.log(weatherInfo.weather[0].icon);
    icon.setAttribute('src',`img/icons/${weatherInfo.weather[0].icon}.svg`);
};

form.addEventListener('submit', e => {
    e.preventDefault();

    const city = form.city.value.trim();
    form.reset();

    localStorage.setItem('city', city);
    
    getInfo(city).then(data => {
        updateUI(data);
    }).catch(err => {
        console.log(err);
    });
});

if(localStorage.getItem('city')){
    getInfo(localStorage.getItem('city'))
    .then(data => {
        updateUI(data);
    }).catch(err => {
        console.log(err);
    });
}