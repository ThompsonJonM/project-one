// JS goes here
var coordinates;
var weatherIcon;
var latitude;
var longitude;
var boredArray = [];
boredArray.push(1887039106, 2235506522, 1990962322);



function getWeather(){
    var url = "https://api.forecast.io/forecast/2b4b9e2d0c9c7ba61f588616d2967c9c/";
    $.getJSON(url + coordinates + "?callback=?", function(data){
        weatherIcon = data.currently.icon;
        weatherBackgroundChange();
    });
};
function weatherBackgroundChange() {
      switch (weatherIcon) {
        case "clear-day":
          document.getElementById("body").style.backgroundImage = 'url("http://img02.deviantart.net/d2c2/i/2005/028/b/6/clear_day_by_juanchis.jpg")';
          break;
        case "clear-night":
          document.getElementById("body").style.backgroundImage = 'url("https://tcklusman.files.wordpress.com/2014/05/tumblr_static_dark-starry-night-sky-226736.jpg")';
           
          break;
        case "rain":
          document.getElementById("body").style.backgroundImage = 'url("http://wearechange.org/wp-content/uploads/2015/03/1_See_It.jpg")';
        
          break;
        case "cloudy":
          document.getElementById("body").style.backgroundImage = 'url("http://www.tripwire.com/state-of-security/wp-content/uploads/cache//shutterstock_106367810/4261234929.jpg")';
          
          break;
        case "partly-cloudy-day":
          document.getElementById("body").style.backgroundImage = 'url("http://www.sturdyforcommonthings.com/wp-content/uploads/2013/03/wind_blowing.jpg")';
          
          break;
        case "partly-cloudy-night":
          document.getElementById("body").style.backgroundImage = 'url("http://scienceblogs.com/startswithabang/files/2013/04/night-sky-stars.jpeg")';
           
          break;
        case "snow":
          document.getElementById("body").style.backgroundImage = 'url("http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg")';
        
          break;
        case "wind":
          $("#body").html();
        default:
          break;
      }
    };
$.ajax({
    url: "https://geoip-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function( location ) {
        
        latitude = location.latitude;
        longitude = location.longitude;
        coordinates = latitude + ", " + longitude;
        $("#location").text(location.city + ", " + location.state);
    },
    complete: function(location){
        getWeather();
    },
    error: function() {
      // 
      console.log("blahblahblah");
    }
});

DZ.init({
    appId  : '240762',
    channelUrl : 'https://thompsonjonm.github.io/project-one/',
    player: {
    container: 'deezerWidget',
    width : 800,
    height : 300,
    playlist: true,
    onload : function(){}
}
});
$("#dezSubmit").on("click", function(){
  console.log("hi");
    DZ.login(function(response) {
    if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        DZ.api('/user/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
        });
    } else {
        console.log('User cancelled login or did not fully authorize.');
    }
    }, {perms: 'basic_access,email, offline_access, manage_library_, manage_community, delete_library, listening_history'});
});
$("#boredButton").on("click", function(){
        var boredPlaylist = boredArray[Math.floor(Math.random() * boredArray.length)];
      
        DZ.player.playPlaylist(boredPlaylist);
        
        });
