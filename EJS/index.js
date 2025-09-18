const express = require("express");
const app = express();
const path = require("path"); //require path for path.join

const port = 8080;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views")); //If we start server from the main directory(For me it is backend folder) views(home.ejs) shows error for path to prevent it set the path name to prevent from it.

app.get("/", (req, res) => {
  //   res.send("Home Page");
  res.render("home.ejs"); //home.ejs is file made in views folder
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  // res.render("rolldice.ejs", { num: diceVal });
  // or we can also write
  res.render("rolldice.ejs", { diceVal });
});

// Instagram EJS

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  // console.log(username);
  res.render("instagram.ejs", { username });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
