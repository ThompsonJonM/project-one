// JS goes here
var corysVar;
var weatherIcon;
var latitude;
var longitude;
function getWeather(){
    var url = "https://api.forecast.io/forecast/2b4b9e2d0c9c7ba61f588616d2967c9c/";
    $.getJSON(url + corysVar + "?callback=?", function(data){
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
          DZ.player.playPlaylist(2235506522);
           
          break;
        case "rain":
          DZ.player.playPlaylist(2096299244);
        
          break;
        case "cloudy":
          DZ.player.playPlaylist(2096299244);
          
          break;
        case "partly-cloudy-day":
          DZ.player.playPlaylist(2096299244);
          
          break;
        case "partly-cloudy-night":
          DZ.player.playPlaylist(2247598026);
           
          break;
        case "snow":
          DZ.player.playPlaylist(2096299244);
            
          break;
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
        corysVar = latitude + ", " + longitude;
        $("#locationInfo").text(location.city + ", " + location.state);
    },
    complete: function(location){
        getWeather();
    },
    error: function() {
      httpsLocation();
    }
});

function httpsLocation() {
    if (navigator.geolocation) {
      var corysVar;
      navigator.geolocation.getCurrentPosition(passLocation);
    }
  }

DZ.init({
    appId  : '240622',
    channelUrl : 'https://cmiljour.github.io/Deezer/index.html',
    player: {
            container: 'deezerWidget',
    width : 800,
    height : 300,
    playlist: true,
    onload : function(){}
}
});
$("#deezerLogin").on("click", function(){
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
        DZ.player.playPlaylist(2096299244);
        
        });
