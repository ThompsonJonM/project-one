// JS goes here

var THE_KEY;  
var coordinates;
var weatherIcon;
var latitude;
var longitude;
var database = firebase.database();
var url;
var badMoodArray = [];
var boredArray = [];
badMoodArray.push(2000587262, 1901477262, 52827441);
boredArray.push(1887039106, 2235506522, 1990962322);

database.ref().once('value', function (snap){
    THE_KEY = snap.val().MY_KEY;
});

function getWeather(){
  console.log("hi");
    var url = "https://api.forecast.io/forecast/" + THE_KEY + "/";
    $.getJSON(url + coordinates + "?callback=?", function(data){
        weatherIcon = data.currently.icon;
        weatherBackgroundChange();
    });
};
function weatherBackgroundChange() {
      switch (weatherIcon) {
        case "clear-day":
          document.getElementById("body").style.backgroundImage = 'url("https://catfinearts.com/weather_images/AdobeStock_159516749_Preview.jpeg")';
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
        $(".location").text(location.city + ", " + location.state);
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
  console.log("hi there");
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
$("#badMoodButton").on("click", function(){
        var badMoodPlaylist = badMoodArray[Math.floor(Math.random() * badMoodArray.length)];
      
        DZ.player.playPlaylist(badMoodPlaylist);
        getWeather();
        });
$("#boredButton").on("click", function(){
        var boredPlaylist = boredArray[Math.floor(Math.random() * boredArray.length)];
      
        DZ.player.playPlaylist(boredPlaylist);
        
        });

