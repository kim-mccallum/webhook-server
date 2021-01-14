require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

// const HttpError = require("./models/http-error"); ////Use this for simple validation below

//test gest and use environment variables
// const { PORT } = require("./config");

const app = express();

//set up additional middleware and basic routes
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send(`Hello world! Welcome to a simple webhook server!`);
});

//the webhook route
app.post("/catch-data", (req, res, next) => {
  //Later - check the body and make sure that it's from the right place. Validate and handle errors
  console.log(req.body); //Call action here
  res.status(200).end(); //respond but add error handling later
});

module.exports = app;
