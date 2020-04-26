// jshint esversion:6
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
const ejs = require("ejs");
const _ = require("lodash");
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var appId = "88955fcb41de59dfa20bdf62950678b9";
  var units = "metric";
  var city = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appId + "&units=" + units;

  https.get(url, function(response) {

    if (response.statusCode === 200) {



      response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        var icon = weatherData.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        var clima = weatherData.weather[0].description;
        let temp = weatherData.main.temp;
        let wcode = weatherData.weather[0].id;
        let ncode = icon.slice(2, 3);
        let max = weatherData.main.temp_max;
        let min = weatherData.main.temp_min;
        let humidity = weatherData.main.humidity;
        let pressure = weatherData.main.pressure;
        let wind = weatherData.wind.speed;
        let country = weatherData.sys.country;
        let place = weatherData.name;

        res.render("clear", {
          clima: clima,
          temp: temp,
          wcode: wcode,
          ncode: ncode,
          max: max,
          min: min,
          humidity: humidity,
          pressure: pressure,
          wind: wind,
          country: country,
          place: place,
        });
      });
    } else {
      res.render("fail", {
        city: city
      });
    }
  });
});

app.post("/new", function(req, res) {
  var appId = "88955fcb41de59dfa20bdf62950678b9";
  var units = "metric";
  var city = "new york";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appId + "&units=" + units;

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      var icon = weatherData.weather[0].icon;
      var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      var clima = weatherData.weather[0].description;
      let temp = weatherData.main.temp;
      let wcode = weatherData.weather[0].id;
      let ncode = icon.slice(2, 3);
      let max = weatherData.main.temp_max;
      let min = weatherData.main.temp_min;
      let humidity = weatherData.main.humidity;
      let pressure = weatherData.main.pressure;
      let wind = weatherData.wind.speed;
      let country = weatherData.sys.country;
      let place = weatherData.name;

      res.render("clear", {
        clima: clima,
        temp: temp,
        wcode: wcode,
        ncode: ncode,
        max: max,
        min: min,
        humidity: humidity,
        pressure: pressure,
        wind: wind,
        country: country,
        place: place,

      });
    });
  });
});
app.post("/par", function(req, res) {
  var appId = "88955fcb41de59dfa20bdf62950678b9";
  var units = "metric";
  var city = "paris";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appId + "&units=" + units;

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      var icon = weatherData.weather[0].icon;
      var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      var clima = weatherData.weather[0].description;
      let temp = weatherData.main.temp;
      let wcode = weatherData.weather[0].id;
      let ncode = icon.slice(2, 3);
      let max = weatherData.main.temp_max;
      let min = weatherData.main.temp_min;
      let humidity = weatherData.main.humidity;
      let pressure = weatherData.main.pressure;
      let wind = weatherData.wind.speed;
      let country = weatherData.sys.country;
      let place = weatherData.name;

      res.render("clear", {
        clima: clima,
        temp: temp,
        wcode: wcode,
        ncode: ncode,
        max: max,
        min: min,
        humidity: humidity,
        pressure: pressure,
        wind: wind,
        country: country,
        place: place,
      });
    });
  });
});

app.post("/bue", function(req, res) {
  var appId = "88955fcb41de59dfa20bdf62950678b9";
  var units = "metric";
  var city = "buenos aires";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appId + "&units=" + units;

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      var icon = weatherData.weather[0].icon;
      var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      var clima = weatherData.weather[0].description;
      let temp = weatherData.main.temp;
      let wcode = weatherData.weather[0].id;
      let ncode = icon.slice(2, 3);
      let max = weatherData.main.temp_max;
      let min = weatherData.main.temp_min;
      let humidity = weatherData.main.humidity;
      let pressure = weatherData.main.pressure;
      let wind = weatherData.wind.speed;
      let country = weatherData.sys.country;
      let place = weatherData.name;

      res.render("clear", {
        clima: clima,
        temp: temp,
        wcode: wcode,
        ncode: ncode,
        max: max,
        min: min,
        humidity: humidity,
        pressure: pressure,
        wind: wind,
        country: country,
        place: place,
      });
    });
  });
});

app.post("/lon", function(req, res) {
  var appId = "88955fcb41de59dfa20bdf62950678b9";
  var units = "metric";
  var city = "london";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appId + "&units=" + units;

  https.get(url, function(response) {

    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      var icon = weatherData.weather[0].icon;
      var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      var clima = weatherData.weather[0].description;
      let temp = weatherData.main.temp;
      let wcode = weatherData.weather[0].id;
      let ncode = icon.slice(2, 3);
      let max = weatherData.main.temp_max;
      let min = weatherData.main.temp_min;
      let humidity = weatherData.main.humidity;
      let pressure = weatherData.main.pressure;
      let wind = weatherData.wind.speed;
      let country = weatherData.sys.country;
      let place = weatherData.name;

      res.render("clear", {
        clima: clima,
        temp: temp,
        wcode: wcode,
        ncode: ncode,
        max: max,
        min: min,
        humidity: humidity,
        pressure: pressure,
        wind: wind,
        country: country,
        place: place,
      });
    });
  });
});


app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("server is running on port 3000");
});
