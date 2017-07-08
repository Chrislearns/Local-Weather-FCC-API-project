let icons = new Skycons({"color": "black"});

    icons.set(document.getElementById("clear-day"), Skycons.CLEAR_DAY);
    icons.set(document.getElementById("clear-night"), Skycons.CLEAR_NIGHT);
    icons.set(document.getElementById("partly-cloudy-day"), Skycons.PARTLY_CLOUDY_DAY);
    icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
    icons.set("cloudy", Skycons.CLOUDY);
    icons.set("rain", Skycons.RAIN);
    icons.set("sleet", Skycons.SLEET);
    icons.set("snow", Skycons.SNOW);
    icons.set("wind", Skycons.WIND);
    icons.set("fog", Skycons.FOG);

    icons.play();

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
       let temp = json.currently.temperature;
       let location = json.timezone;
       let dailyIcon = json.currently.icon;
       let weatherSummary = json.currently.summary;
       let temperatureMeasurementF = "<img class='farenheit-image' src ='images/farenheit.jpg'></img>";
       let temperatureMeasurementC = "<img class='farenheit-image' src ='images/celsius.jpg'></img>";
       let dailySummary = json.daily.summary;

          $('.location-section').html("Your current coordinates are: <br>Latitude:"+ position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
        //  $('.darksky-icon').html("")


     }


      });
    });


  });
