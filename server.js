// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/allRoutes");
const pool = require("./config/database.js");

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
