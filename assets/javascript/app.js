// JS goes here
$(document).ready(function(){
  $("#mainBody").toggle();

var THE_KEY;  
var coordinates;
var weatherIcon;
var latitude;
var longitude;
var database = firebase.database();
var url;
var badMoodArray = [];
var sadArray = [];
var boredArray = [];
var sleepyArray = [];
var romanticArray = [];
var happyArray = [];
badMoodArray.push(1371750135, 1901477262, 52827441);
sadArray.push(3324355486, 2980331902, 1990962322)
boredArray.push(1887039106, 1098097641, 1611984447);
sleepyArray.push(1448049285, 2601249944, 2789105064);
romanticArray.push(3303498466, 1355159267, 3195454206);
happyArray.push(2594990288, 1260995451, 2103869264);

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
          document.getElementById("mainBody").style.backgroundImage = 'url("https://img02.deviantart.net/d2c2/i/2005/028/b/6/clear_day_by_juanchis.jpg")';
          $(".describeWeather").text("It's a clear day");
          break;
        case "clear-night":
          document.getElementById("mainBody").style.backgroundImage = 'url("https://tcklusman.files.wordpress.com/2014/05/tumblr_static_dark-starry-night-sky-226736.jpg")';
          $(".describeWeather").text("It's a clear night"); 
          break;
        case "rain":
          document.getElementById("mainBody").style.backgroundImage = 'url("http://wearechange.org/wp-content/uploads/2015/03/1_See_It.jpg")';
          $(".describeWeather").text("It's raining");
          break;
        case "cloudy":
          document.getElementById("mainBody").style.backgroundImage = 'url("http://www.tripwire.com/state-of-security/wp-content/uploads/cache//shutterstock_106367810/4261234929.jpg")';
          $(".describeWeather").text("It's cloudy");
          break;
        case "partly-cloudy-day":
          document.getElementById("mainBody").style.backgroundImage = 'url("http://www.sturdyforcommonthings.com/wp-content/uploads/2013/03/wind_blowing.jpg")';
          $(".describeWeather").text("It's partly cloudy");
          break;
        case "partly-cloudy-night":
          document.getElementById("mainBody").style.backgroundImage = 'url("http://scienceblogs.com/startswithabang/files/2013/04/night-sky-stars.jpeg")';
          $(".describeWeather").text("It's a partly cloudy night"); 
          break;
        case "snow":
          document.getElementById("mainBody").style.backgroundImage = 'url("http://www.vancitybuzz.com/wp-content/uploads/2015/12/shutterstock_315123593-984x500.jpg")';
          $(".describeWeather").text("It's snowing");
          break;
        case "wind":
          document.getElementById("mainBody").style.backgroundImage = 'url("http://www.phantomacademy.com/wp-content/uploads/2016/07/windy-drone.jpg")';
          $(".describeWeather").text("It's windy");
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
  getWeather();
  $("#mainBody").toggle();
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
        // getWeather();
        });
$("#sadButton").on("click", function(){
        var sadPlaylist = sadArray[Math.floor(Math.random() * sadArray.length)];
      
        DZ.player.playPlaylist(sadPlaylist);
        
        });
$("#boredButton").on("click", function(){
        var boredPlaylist = boredArray[Math.floor(Math.random() * boredArray.length)];
      
        DZ.player.playPlaylist(boredPlaylist);
        
        });
$("#sleepyButton").on("click", function(){
        var sleepyPlaylist = sleepyArray[Math.floor(Math.random() * sleepyArray.length)];
      
        DZ.player.playPlaylist(sleepyPlaylist);
        
        });
$("#romanticButton").on("click", function(){
        var romanticPlaylist = romanticArray[Math.floor(Math.random() * romanticArray.length)];
      
        DZ.player.playPlaylist(romanticPlaylist);
        
        });
$("#happyButton").on("click", function(){
        var happyPlaylist = happyArray[Math.floor(Math.random() * happyArray.length)];
      
        DZ.player.playPlaylist(happyPlaylist);
        
        });});

