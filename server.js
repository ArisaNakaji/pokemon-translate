const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("App listening on port " + port);
});

app.get("/api", (req, res) => {
  res.json("kita-----✨✨");
});

app.get("/api/pokemon_id", (req, res) => {
  ;
});