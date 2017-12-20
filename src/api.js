var express = require('express');
var server = express();

var http = require("http");
const path = require('path');
exports.callApi = function() {

//define port
var port = process.env.PORT || 8080;

//route

server.get('/:cityAndCountry',  function(req, res) {
  getWeather();

  

  function getWeather() {

    //get api key from https://openweathermap.org/appid

    const openWeatherapiKey = "d6e520270c176e85b5cbe0246d276b93";

   
    
    var location = req.params.cityAndCountry;

    console.log("Getting weather for " + location);

    //passing req params as input to openweahter
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${openWeatherapiKey}`;

    //getting response in chunks
    var data = "";

    http.get(url, function(myRes) {
      myRes.on('data', function(chunk) {
        data += chunk;
      });
      myRes.on('end', function() {
        callback(data);
      });
    }).on('error', function() {
      console.log("Error getting data.");
    });
  }


//sending response as json
  function callback(finalData) {
    
    try {
      var json = JSON.parse(finalData);
      console.log(json.weather[0].description);
      res.status(200).json(json.weather[0].description);
    } catch(e){
      console.log("city not found ,correct e.g:localhost/melbourne,au");
      res.status(404)        // HTTP status 404: NotFound
      .send('city not found ,correct e.g:localhost/melbourne,au');
    }

    
  
  }
});

//More Setup

server.use(express.static(__dirname + '/static'));

server.listen(port);

//in a business server this can be blocked from remote calls and gateway port only will have access to :8080 api`s port.

console.log('The WeatherMan api is running on port ' + port);


};

