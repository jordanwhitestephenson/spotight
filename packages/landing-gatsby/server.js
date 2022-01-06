const gatsbyExpress = require('gatsby-plugin-express');
const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
var sgTransport = require("nodemailer-sendgrid-transport");
const cors = require("cors");


const app = express();
var options = {
  auth: {
    api_user: "jordanwhitestephenson@gmail.com",
    api_key: "NolanThatcherStephenson2020",
  },
};

// app.use(bodyParser.urlencoded());

var client = nodemailer.createTransport(sgTransport(options));

app.post("/collectionrequest", function (req, res) {

  var email = {
    from: 'jordanwhitestephenson@gmail.com',
    to: 'jordanwhitestephenson@gmail.com',
    subject: 'Hello',
    text: 'Hello world',
    html: '<b>Hello world</b>'
  };
  client.sendMail(email, function (err, info) {
    if (err) {
      console.log(error);
    } else {
      console.log("Message sent: " + info.response);
    }
  });
});


  app.use(cors({
    /** Use this when web frontend / production **/
    // origin: 'https://example.com',
  
    /** Use this when local frontend / development **/
    origin: "http://localhost:8000",
  }));
  