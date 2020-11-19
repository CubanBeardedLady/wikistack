// Packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const layout = require('./views/layout');
const { db } = require('./models');
const path = require('path');

// Initializers
const app = express();
const staticMiddleware = express.static(path.join(__dirname, "public"));
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

// Middleware
app.use(staticMiddleware);
app.use(morgan('Dev'));
app.use(express.urlencoded({ extended: false }));

// Routes / RESTful APIs
app.get("/", async (req, res, next) => {
  res.send(layout('Yo dude'));
});

// Listen
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening: http://localhost:${PORT}`);
});
