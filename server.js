// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/allRoutes");
const pool = require("./config/database.js");

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use("/api", userRoutes);

// Serve the home page
app.get('/', (req, res) => {
  res.render('pages/home');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
