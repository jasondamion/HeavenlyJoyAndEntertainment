var dotenv = require("dotenv").config();
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
var cloudinary = require('cloudinary');

// reservation/Male/Muriel Page/Jason Nelson/3477929311/377 New Milford Ave/jasonnelson11@gmail.com/02081999/06032019/21/Silver Package/Outer Space Theme/250/250/500/125

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
}
);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var mailer = require("./app/nodemailer");

// Routes
console.log("Server working")


console.log("Server Connected")

app.get("/", function (req, res) {
  res.send("Working");
})

app.get("/contact/:Name/:phone/:email/:message", function(req,res){
  res.setHeader('Access-Control-Allow-Origin', 'https://jasondamion.github.io');
  mailer.contact(req.params.Name,req.params.phone,req.params.email,req.params.message)
  res.send("Contact Email Sent")
})

app.get("/Reservation/:gender/:guardianName/:childName/:phone/:address/:email/:childBday/:event/:age/:package/:theme/:packagePrice/:addOnPrice/:totalPrice/:deposit", function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://jasondamion.github.io');
  gender = req.params.gender
  guardianName = req.params.guardianName
  childName = req.params.childName
 phone = req.params.phone
 address = req.params.address
 email = req.params.email
 childBday = req.params.childBday
  event = req.params.event
  age = req.params.age
  package1 = req.params.package
  theme = req.params.theme
  packagePrice = req.params.packagePrice
  addOnPrice = req.params.addOnPrice
  totalPrice = req.params.totalPrice
  deposit = req.params.deposit
  mailer.reserve(gender, guardianName, childName, phone, address, email, childBday, event, age, package1, theme, packagePrice, addOnPrice, totalPrice, deposit)
res.send("Reservation Email Sent")
})

app.get("/gallery", function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://jasondamion.github.io');
  cloudinary.v2.api.resources_by_tag("heaven",
    function (error, result) { 
      if (error){
        console.log(error)
      }
    res.json(result.resources);
    });
})





app.listen(PORT);

