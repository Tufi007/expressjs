const express = require("express");
let app = express();

const fs = require("fs");
const morgan = require("morgan");
let movieroute= require('./movierouter');
app.use(express.json());

// console.log(app)

app.use((req, res, next) => {
  console.log("within custome logger middelware");
  next();
});
app.use(morgan("dev"));
app.use(express.static('./public'));
app.use('/home',movieroute);
// app.route("/home").get(getallmovies);
// app.route("/home/add").post(addmovie);

module.exports= app;