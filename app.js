// jshint esversion:6
const express = require("express");

const https = require("https");

const app = express();


app.get("/", function(req, res) {
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
      var clima = "The temperature in " + city + "  is: " + weatherData.main.temp + " degrees celcius and the weather is: " + weatherData.weather[0].description;
      res.write("<h1>" + clima + "</h1>");
      res.write("<img src='" + iconURL + "'/>");
      res.send();

    });
  });


});







app.listen(3000, function() {
  console.log("server is running on port 3000");
});
