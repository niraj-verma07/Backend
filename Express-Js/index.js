const express = require("express");
const app = express();
// console.dir(app);
let port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

//Sending request to server
// app.use((req, res) => {
//   console.log("New Request recived");
//   //Sending response to the user
//   //   res.send("This is the response"); //Normal text message
//   //   res.send({ // Object
//   //     name: "Niraj",
//   //     OS: "Windows",
//   //   });

//   res.send("<h1>HTML tag</h1>"); //Html tag
// });

//Send response to routing

//for get request
app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/about", (req, res) => {
  res.send("You contacted about path");
});

app.get("/contact", (req, res) => {
  res.send("You contacted contact path");
});

//For post request
app.post("/", (req, res) => {
  res.send("You contacted root path");
});

//For all undefined path
app.use((req, res) => {
  res.status(404).send("This path does not exist");
});
