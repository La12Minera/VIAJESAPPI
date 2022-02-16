// Armado de la orquesta inicial

const express = require("express");

const routeConfig = require("./routes");

const connectDB = require("./conection");

const app = express();

connectDB();

routeConfig(app);

app.listen(8080, () => {
  console.log("Server has started 8080");
});
