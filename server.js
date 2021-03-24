const express = require("express");
const app = express();
const knex = require("./db/knex");
const path = require("path");
const cors = require("cors");

app.use(cors())
// app.use(express.static(__dirname + "/dist"));
app.use(express.static(path.join(__dirname, './build')));

app.get("/api/pokemon/:english_name", async (req, res) => {
  console.log("req.params.english_name: ", req.params.english_name)
  knex("pokemons")
    .where({ english_name: req.params.english_name })
    // await knex.select().from('pokemons')
    //   .where('english_name', req.params.english_name)
    .then(poke => {
      return res.send(poke)
    })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/status/index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("App listening on port " + port);
});