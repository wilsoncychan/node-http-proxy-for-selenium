var express = require("express");
var app = express();
var request = require("request");

var targetHost = process.env.TARGETHOST
var basicAuthToken = process.env.BASICAUTHTOKEN;

app.get("/*", function(req, res) {

    console.log(req.url);

    var options = {};
    if (!!basicAuthToken && basicAuthToken !== '') {
        options.headers = {
            "Authorization": "Basic " + basicAuthToken
        }
    }

    request(targetHost + req.url, options, function(error, response, body) {
        res.send(body);
    });
});

app.listen(3001, function() {
    console.log("Node server is running at Port " + 3001);
});
