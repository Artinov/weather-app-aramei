var weather = {"consolidated_weather":[{"id":5495729447501824,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"WNW","created":"2017-02-25T14:51:02.514730Z","applicable_date":"2017-02-25","min_temp":-2.282,"max_temp":4.3079999999999998,"the_temp":3.48,"wind_speed":8.5069633253797825,"wind_direction":300.2477865021342,"air_pressure":1010.6900000000001,"humidity":70,"visibility":10.025202815557146,"predictability":75},{"id":5335324968353792,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"WSW","created":"2017-02-25T14:51:07.212840Z","applicable_date":"2017-02-26","min_temp":-2.2450000000000001,"max_temp":3.222,"the_temp":1.8599999999999999,"wind_speed":8.2044319596309556,"wind_direction":241.47939775629726,"air_pressure":1020.1849999999999,"humidity":76,"visibility":12.943783305495904,"predictability":75},{"id":5181784182489088,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"W","created":"2017-02-25T14:51:08.691890Z","applicable_date":"2017-02-27","min_temp":0.42000000000000004,"max_temp":6.7199999999999989,"the_temp":6.0700000000000003,"wind_speed":6.7383140643076427,"wind_direction":261.65343010746824,"air_pressure":1014.36,"humidity":83,"visibility":13.376879026485325,"predictability":73},{"id":6037676473974784,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"S","created":"2017-02-25T14:51:11.426890Z","applicable_date":"2017-02-28","min_temp":1.6179999999999999,"max_temp":9.2420000000000009,"the_temp":7.875,"wind_speed":8.956824796637239,"wind_direction":177.20914402163081,"air_pressure":1011.0650000000001,"humidity":82,"visibility":13.823023542511731,"predictability":73},{"id":6180754920833024,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"SSW","created":"2017-02-25T14:51:14.591360Z","applicable_date":"2017-03-01","min_temp":3.2399999999999998,"max_temp":9.4760000000000009,"the_temp":9.0399999999999991,"wind_speed":8.4386641897605976,"wind_direction":194.13546912343466,"air_pressure":1002.875,"humidity":87,"visibility":10.927433786685755,"predictability":73},{"id":6521621242183680,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"SW","created":"2017-02-25T14:51:17.511700Z","applicable_date":"2017-03-02","min_temp":2.0625,"max_temp":8.1225000000000005,"the_temp":6.8200000000000003,"wind_speed":6.7767922002173968,"wind_direction":232.85540674890836,"air_pressure":990.12,"humidity":88,"visibility":null,"predictability":73}],"time":"2017-02-25T17:32:07.780180+02:00","sun_rise":"2017-02-25T06:49:54.821782+02:00","sun_set":"2017-02-25T17:32:46.499611+02:00","timezone_name":"LMT","parent":{"title":"Ukraine","location_type":"Country","woeid":23424976,"latt_long":"48.382881,31.173441"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":180},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360},{"title":"Yahoo","slug":"yahoo","url":"http://weather.yahoo.com/","crawl_rate":180}],"title":"Kiev","location_type":"City","woeid":924938,"latt_long":"50.441380,30.522490","timezone":"Europe/Kiev"};

var cityName = document.querySelector("#cityName");
var time = document.querySelector("#time");

var humidity = document.querySelector("#humidity");
var the_temp = document.querySelector("#the_temp");
var weather_state_name = document.querySelector("#weather_state_name");
var wind_speed = document.querySelector("#wind_speed");

var shortWeather = weather.consolidated_weather[0];
var weatherIconsPlaceholders = document.querySelectorAll("img");

var select = document.querySelector("#city");

select.onchange = function(){
	var townName = select.value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	var response = JSON.parse(this.responseText);

	    	humidity.innerText = response.current.humidity;
			the_temp.innerText = response.current.temp_c;
			weather_state_name.innerText = response.current.condition.text;
			wind_speed.innerText = response.current.wind_kph;

			cityName.innerText = response.location.name;
			time.innerText = response.location.localtime;
			weatherIconsPlaceholders.forEach(function(img) {
				img.setAttribute("src", "https:" + response.current.condition.icon);
			})
	    }
	};
	xhttp.open("GET", "https://intense-beach-78744.herokuapp.com/?city=" + townName, true);
	xhttp.send();
}