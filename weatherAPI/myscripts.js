//Dark Ski has disabled CORS. Also IP API is not https so it can't be used on codepen. I've completed the project before changes and I hope I can still recieve my Front End Certificate!


$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("https://api.darksky.net/forecast/" + position.coords.latitude + "," + position.coords.longitude, function(json){
      console.log(json);
    })
console.log(position);
    $.ajax({
      url: "https://api.darksky.net/forecast/b723c0de034cb7462e8e73bc266af457/" + position.coords.latitude + "," + position.coords.longitude ,
      type: 'GET',
      dataType: 'json',
      success: function(json) {
console.log(json);
       var descrip = json.weather[0].description;
    
   $(".info").html((descrip.replace(/\w\S*/g, function(c) {
          return c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
        })) + " " + "<img class = newicon src=" + "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png></img>");
        $(".location").html(json.name + ", " + json.sys.country);


    var convertF = "<button class = btn btn-success btn-transparent  change-temp style = color:red>ºF</button>";    
  var convertC = "<button class = btn btn-success btn-transparent  change-temp style = color:red> ºC</button>";
  
   var degrees = json.main.temp;
       var farenheit = Math.round(1.8 *(degrees - 273) + 32);
             var celsius = Math.round((farenheit - 32) / 1.8);
  $(".degrees").html(farenheit + convertF);
      
       
 
     }     
  
          
      });
    });
 
  });

      
          