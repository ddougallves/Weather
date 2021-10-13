# About Weather
A simple project which you have access to current weather data using a free weather API called OpenWeatherMap. To see an example of the project working [click here](https://gitweather.000webhostapp.com/).

# Features
As said before, it is a simple project, so you get the following information on search:

* Search location
* Current temperature
* Wind direction and speed
* Feels like temperature
* Humidity
* Min and max temperature

# First things first
Is worth to mention that in order to get this project to function you need to get an API key by creating an account at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up). After creating an account, go to **my API key menu** and generate an API key. You will need this API key to go on.

Now that you have your API key, go into **script.js**, at the beginning you will find this line:

```
let url = "https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(search)}&appid={your API key}&units=imperial&lang=en"
```

At the **url** variable, replace **{your API key}** with your API key. Now just open the **index.html** in your browser to see the project working.


# Customization 
You can customize the project as you want, such as filter the information fetched by the API and language for example. If you want to know more about how to customize the information you get by searching, you can get it at the [OpenWeatherMap API](https://openweathermap.org/api) documentation. Bellow you get the some tips to custom the project:

## Changing the language

You can change the language of the information displayed on the screen by going to **script.js** document at the **url** variable:

```
let url = "https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(search)}&appid={your API key}&units=imperial&lang=en"
```
As you noticed, at the end of the **url** variable there is a parameter **"lang=en"**, here you define the language. So for example, let's change the language to **French** , this going to be something like this:

```
let url = "https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(search)}&appid={your API key}&units=imperial&lang=fr"
```
These are the language, values that you can use:

Value   | Language                  | Value     | Language
:------ | :------                   | :-------  | :------
af      | Afrikaans                 | al        | Albanian
ar      | Arabic                    | az        | Azerbaijani
bg      | Bulgarian                 | ca        | Catalan
cz      | Czech                     | da        | Danish
de      | German                    | el        | Greek
en      | English                   | eu        | Basque
fa      | Persian (Farsi)           | fi        | Finnish
fr      | French                    | gl        | Galician
he      | Hebrew                    | hi        | Hindi
hr      | Croatian                  | hu        | Hungarian
id      | Indonesian                | it        | Italian
ja      | Japanese                  | kr        | Korean
la      | Latvian                   | lt        | Lithuanian
mk      | Macedonian                | no        | Norwegian
nl      | Dutch                     | pl        | Polish
pt      | Portuguese                | pt_br     | Português Brasil
ro      | Romanian                  | ru        | Russian
sv, se  | Swedish                   | sk        | Slovak
sl      | Slovenian                 | sp, es    | Spanish
sr      | Serbian                   | th        | Thai
tr      | Turkish                   | ua, uk    | Ukrainian
vi      | Vietnamese                | zh_cn     | Chinese Simplified
zh_tw   | Chinese Traditional       | zu        | Zulu



## More about changing language

After change the language parameter in the **url** , some infos titles displayed on screen needed to be changed manually, to do that, you go into **index.html** end change all divs with the class **title** in the language you chose, for example:

if you keep the parameter **"lang=en"** in the **url**, the title about "Humidity" should be like this:

```
<div class="Humidity">
    <div class="title">Humidity</div>
    <div class="info">--</div>
</div>
```
Now, if we change the parameter to **lang=pt_br** , the title about "Humidity" should be changed manually to the language we chose:

```
<div class="Humidity">
    <div class="title">Humidade</div>
    <div class="info">--</div>
</div>
```

The following blocks' titles on **index.html** need to be changed manually if you change the parameter **lang=en** :

```
<div class="temp">
    <div class="title">Temperature</div>
    <div class="info">--</div>
    <div class="icon">
        <img src="http://openweathermap.org/img/wn/10d@2x.png" />
    </div>
</div>
```

```
<div class="title">Wind</div>
<div class="info">--</div>
<div class="icon">
    <div class="windArea">
        <div class="windVane" style="transform: rotate(0deg)"></div>
    </div>
</div>
```

```
<div class="FeelsLike">
    <div class="title">Feeels Like</div>
    <div class="info">--</div>
</div>
```            

```
<div class="Humidity">
    <div class="title">Humidity</div>
    <div class="info">--</div>
</div>
```

```
<div class="Min">
    <div class="title">Min</div>
    <div class="info">--</div>
</div>
```

```
<div class="Min">
    <div class="title">Min</div>
    <div class="info">--</div>
</div>
```

## Temperature unit

By default the project shows it in Fahrenheit. To change the temperature unit you go to **script.js** into the variable **url** and change the parameter **units=imperial**.

### By default the **url** variable is something like this:

```Imperial unit
let url = "https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(search)}&appid={your API key}&units=imperial&lang=en"
```

If unit parameter is **units=imperial** , the wind speed unit you will get is **miles/hour**. 

### For temperature in metric unit use:

```Metric unit
let url = "https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(search)}&appid={your API key}&units=metric&lang=en"
```

If unit parameter is **units=metric** , the wind speed unit you will get is **meter/second**. 


## More about temperature

If you change the temperature unit in the **url** to **units=metric**, you need change the following lines into **showResult(info)** function at **script.js** :

```
document.querySelector('.temp .info').innerHTML = `${temp}<sup>°F</sup>`;
```
~~~
document.querySelector('.wind .info').innerHTML = `${wind}<span>m/h</span>`;
~~~
```
document.querySelector('.Max .info').innerHTML = `${maxima}<sup>°F</sup>`;
```
```
document.querySelector('.Min .info').innerHTML = `${minima}<sup>°F</sup>`;
```
```
document.querySelector('.FeelsLike .info').innerHTML = `${feelsLike}<sup>°F</sup>`;
```


### In metric unit change it to:

```
document.querySelector('.temp .info').innerHTML = `${temp}<sup>°C</sup>`;
```
~~~
document.querySelector('.wind .info').innerHTML = `${wind}<span>m/s</span>`;
~~~
```
document.querySelector('.Max .info').innerHTML = `${maxima}<sup>°C</sup>`;
```
```
document.querySelector('.Min .info').innerHTML = `${minima}<sup>°C</sup>`;
```
```
document.querySelector('.FeelsLike .info').innerHTML = `${feelsLike}<sup>°C</sup>`;
```










 




