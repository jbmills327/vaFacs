var express = require("express"),
    API = require("./VAFacilityLocation.js");;

var app = express();

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile("index.html", {
            root: './public/html'
        });
    });


    app.get("/api/locations", (req, res) => {
        res.send(API);
    });


}
