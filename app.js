// Packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const path = require("path");
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

// Initializers
const app = express();
const staticMiddleware = express.static(path.join(__dirname, "public"));
db.authenticate().then(() => {
  console.log("connected to the database");
});

// Middleware
app.use(staticMiddleware);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes / RESTful APIs
app.use('/wiki', wikiRouter);

// Default Route
app.get("/", async (req, res, next) => {
  res.redirect('/wiki');
});

// Listen
const init = async () => {

  try {
    await Page.sync();
    await User.sync();
    await db.sync();
    //   await db.sync({force: true});
  } catch (err) {
    console.error(err);
  }

  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`App listening: http://localhost:${PORT}`);
  });

};

init();
