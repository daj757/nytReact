const express = require("express");
const bodyParser = require("body-Parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path")
const History = require("./models/History");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/nytReact");
var db = mongoose.connection;
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
app.use(express.static(path.resolve(__dirname + "/public")));

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname+ "/public/index.html"));
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
