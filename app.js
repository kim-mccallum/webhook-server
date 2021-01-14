require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const HttpError = require("./models/http-error"); ////Use this for simple validation below

//use environment variables to hide email credentials. Eventually use nodemailer to email myself
//also try to use the S123 API to create a report
const { EMAIL_USER, EMAIL_PW } = require("./config");
console.log(EMAIL_USER, EMAIL_PW);

const app = express();

//set up additional middleware and basic routes
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: `Hello world! Welcome to a simple webhook server!` });
});

//the webhook route
app.post("/catch-data", (req, res, next) => {
  //Later - check the body and make sure that it's from the right place. Validate and handle errors
  //   console.log(req.body); //Call action here
  const email = req.body.feature.attributes.what_is_your_email;
  console.log(email);
  res.status(200).json({ message: "received" }).end(); //respond but add error handling later
});

module.exports = app;
