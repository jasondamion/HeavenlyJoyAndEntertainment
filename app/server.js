var dotenv = require("dotenv").config();
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
}
);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
console.log("Server working")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

console.log("Server Connected")

app.get("/", function(req, res){
res.render("./start.html")
})

app.get("/gallery", function(req, res){
  cloudinary.v2.api.resources_by_tag('test',
    {max_results: 20},
        function (err, results) {
               res.json(results.resources)  

        }
)  
})




        
app.listen(PORT);

