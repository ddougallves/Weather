document.querySelector('.search').addEventListener('submit',async(event)=>{
    event.preventDefault();
    let search = document.querySelector('.search input').value;
    if(search !== ''){
        document.querySelector('.resultArea').style.display = 'none';
        changeLoadingAreaInfo('Searching...');
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(search)}&appid=fda0ab6b28bbb8d67f993553af8ee2a8&units=metric&lang=en_us`
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
            maxima: json.main.temp_max,
            minima: json.main.temp_min,
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
    let temp = info.temp;
    temp = temp.toString();
    temp = temp.replace('.',',');

    let wind = info.windSpeed;
    wind = wind.toString();
    wind = wind.replace('.',',');

    let maxima = info.maxima;
    maxima = maxima.toString();
    maxima = maxima.replace('.',',');

    let minima = info.minima;
    minima = minima.toString();
    minima = minima.replace('.',',');

    let feelsLike = info.feelsLike;
    feelsLike = feelsLike.toString();
    feelsLike = feelsLike.replace('.',',');

    document.querySelector('.search input').value = '';
    document.querySelector('.resultArea .titleArea').innerHTML = `${info.name}, ${info.country}<span>${info.description}</span>`;
    document.querySelector('.temp .info').innerHTML = `${temp}<sup>ºC</sup>`;
    document.querySelector('.wind .info').innerHTML = `${wind}<span>km/h</span>`;
    document.querySelector('img').src = `http://openweathermap.org/img/wn/${info.tempIcon}@2x.png`;
    document.querySelector('.windVane').style.transform = `rotate(${info.windDeg - 90}deg)`;
    document.querySelector('.Max .info').innerHTML = `${maxima}<sup>ºC</sup>`;
    document.querySelector('.Min .info').innerHTML = `${minima}<sup>ºC</sup>`;
    document.querySelector('.FeelsLike .info').innerHTML = `${feelsLike}<sup>ºC</sup>`;
    document.querySelector('.Humidity .info').innerHTML = `${info.humidity}<span>%</span>`;
    document.querySelector('.resultArea').style.display = 'block';
}

function clearInfo(){
    document.querySelector('.search input').value = '';
    document.querySelector('.resultArea').style.display = 'none';
    changeLoadingAreaInfo("We couldn't find this location.");
}