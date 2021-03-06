var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var trainingsRoutes = require("./src/routes/trainings");
var exercisesRoutes = require("./src/routes/exercises");

// Establish Mongo DB Connection
var dbConnection = require("./src/db/dbConnection");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/trainings", trainingsRoutes);
app.use("/exercises", exercisesRoutes);

app.use("*", function(req, res) {
  res.status(404).send("Invalid URL");
});

app.listen(3001);
