const express = require("express");
const app = express();
const knex = require("./knexfile");
const path = require("path");


// app.use(express.static(__dirname + "/dist"));
app.use(express.static(path.join(__dirname, './build')));

app.get("/api", (req, res) => {
  res.json("kita-----✨✨");
});

app.get("/api/pokemon/english_name", (req, res) => {
  ;
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/status/index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("App listening on port " + port);
});