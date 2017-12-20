var express = require('express');
var server = express();
var http = require("http");
const path = require('path');
const gateway = require('express-gateway');

var api = require("./src/api");
//using gateway we will check authentication and set req/hour 
//limit in ./config/gateway.config.yml under policies: -ratelimit 
//and authentication policy under - key-auth:

gateway()
  .load(path.join(__dirname, 'config'))
  .run();

//call openweather Api

api.callApi();

