var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");




var indexRouter = require("./routes/index");


var app = express();



// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send({ error: "Not found" });
});

// error handler
app.use(async function (err, req, res, next) {
  console.log("I am gonna catch");
  // Sentry.captureException(err);
  // await Sentry.flush();
  if (process.env.DEBUG === "true") {
    console.log("Global error handler", err.message, err.status);
    return res.status(err.status || 500).send({ message: err.message });
    // return res
    //   .status(err.status || JSON.parse(err.message).code)
    //   .send(JSON.parse(err.message));
  } else {
    return res.status(500).send({ message: "Something went wrong" });
  }
});

module.exports = app;
