const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
var sgTransport = require("nodemailer-sendgrid-transport");

var options = {
  auth: {
    api_user: "jordanwhitestephenson@gmail.com",
    api_key: "NolanThatcherStephenson2020",
  },
};

app.use(bodyParser.urlencoded());

const contactAddress = "hey@yourwebsite.com";

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
app.listen(3000);
