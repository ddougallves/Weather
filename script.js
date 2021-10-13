document.querySelector('.search').addEventListener('submit',async(event)=>{
    event.preventDefault();
    let search = document.querySelector('.search input').value;
    if(search !== ''){
        document.querySelector('.resultArea').style.display = 'none';
        changeLoadingAreaInfo('Searching...');
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(search)}&appid={your API key}&units=imperial&lang=en`
        let result = await fetch(url);
        let json = await result.json();
        (json.cod === 200)?showResult({
            name: json.name,
            country: json.sys.country,
            description: json.weather[0].description,
            temp: json.main.temp,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            windDeg: json.wind.deg,
            max: json.main.temp_max,
            min: json.main.temp_min,
            feelsLike: json.main.feels_like,
            humidity: json.main.humidity
        }):clearInfo();
    }else{
        clearInfo();
    }
})

function changeLoadingAreaInfo(warning){
    document.querySelector('.warningArea').innerHTML = warning;
}

function showResult(info){
    changeLoadingAreaInfo('');
 
    document.querySelector('.search input').value = '';
    document.querySelector('.resultArea .titleArea').innerHTML = `${info.name}, ${info.country}<span>${info.description}</span>`;
    document.querySelector('.temp .info').innerHTML = `${info.temp}<sup>°F</sup>`;
    document.querySelector('.wind .info').innerHTML = `${info.windSpeed}<span>m/h</span>`;
    document.querySelector('img').src = `http://openweathermap.org/img/wn/${info.tempIcon}@2x.png`;
    document.querySelector('.windVane').style.transform = `rotate(${info.windDeg - 90}deg)`;
    document.querySelector('.Max .info').innerHTML = `${info.max}<sup>°F</sup>`;
    document.querySelector('.Min .info').innerHTML = `${info.min}<sup>°F</sup>`;
    document.querySelector('.FeelsLike .info').innerHTML = `${info.feelsLike}<sup>°F</sup>`;
    document.querySelector('.Humidity .info').innerHTML = `${info.humidity}<span>%</span>`;
    document.querySelector('.resultArea').style.display = 'block';
}

function clearInfo(){
    document.querySelector('.search input').value = '';
    document.querySelector('.resultArea').style.display = 'none';
    changeLoadingAreaInfo("We couldn't find this location.");
}