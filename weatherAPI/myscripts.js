

$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("https://api.darksky.net/forecast/" + position.coords.latitude + "," + position.coords.longitude, function(json){
      console.log(json);
    })
console.log(position);
    $.ajax({
      url: "https://api.darksky.net/forecast/b723c0de034cb7462e8e73bc266af457/" + position.coords.latitude + "," + position.coords.longitude ,
      type: 'GET',
      dataType: 'jsonp',

      success: function(json) {
console.log(json);
       let farenheitTemp = json.currently.temperature;
       let location = json.timezone;
       let currentIcon = json.currently.icon;
       let weatherSummary = json.currently.summary;
       let temperatureMeasurementF = "<img class='farenheit-image' src ='images/farenheit.jpg'></img>";
       let temperatureMeasurementC = "<img class='celsius-image' src ='images/celsius.png'></img>";
       let dailySummary = json.daily.summary;
       let celsiusTemp = Math.round((farenheitTemp - 32) / 1.8);
// Show Coordinates
          $('.location-section').html("Your current coordinates are: <br>Latitude:"+ position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
        //
        if(currentIcon === "clear-day"){
          $('#clear-day').show('slow');
        }
        if(currentIcon === "clear-night"){
          $('#clear-night').show('slow');
        }
        if(currentIcon === "partly-cloudy-day"){
          $('#partly-cloudy-day').show('slow');
        }
        if(currentIcon === "partly-cloudy-night"){
          $('#partly-cloudy-night').show('slow');
        }
        if(currentIcon === "cloudy"){
          $('#cloudy').show('slow');
        }
        if(currentIcon === "rain"){
          $('#rain').show('slow');
        }
        if(currentIcon === "sleet"){
          $('#sleet').show('slow');
        }
        if(currentIcon === "snow"){
          $('#snow').show('slow');
        }
        if(currentIcon === "wind"){
          $('#wind').show('slow');
        }
        if(currentIcon === "fog"){
          $('#fog').show('slow');
        }
        $('.temperature-section-celsius').html(celsiusTemp).hide();
        $('.temperature-measurement-celsius').html(temperatureMeasurementC).hide();
        $('.temperature-section').html(farenheitTemp);
        $('.temperature-measurement').html(temperatureMeasurementF);
        $('.weather-summary').html(weatherSummary);
        $('.daily-summary').html(dailySummary);

$('.temperature-section, .temperature-measurement').on('click',function(){
  $('.temperature-section, .temperature-measurement').hide();
  $('.temperature-section-celsius, .temperature-measurement-celsius').show();
});
$('.temperature-section-celsius, .temperature-measurement-celsius').on('click',function(){
  $('.temperature-section-celsius, .temperature-measurement-celsius').hide();
  $('.temperature-section, .temperature-measurement').show();
});

        let icons = new Skycons({"color": "black"});

            icons.set("clear-day", Skycons.CLEAR_DAY);
            icons.set("clear-night", Skycons.CLEAR_NIGHT);
            icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
            icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
            icons.set("cloudy", Skycons.CLOUDY);
            icons.set("rain", Skycons.RAIN);
            icons.set("sleet", Skycons.SLEET);
            icons.set("snow", Skycons.SNOW);
            icons.set("wind", Skycons.WIND);
            icons.set("fog", Skycons.FOG);

            icons.play();

     }


      });
    });


  });
