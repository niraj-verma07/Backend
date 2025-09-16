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

//For all undefined path (e hamesha sare path ke niche hota hai)
// app.use((req, res) => {
//   res.status(404).send("This path does not exist");
// });

//Path parameters
// app.get("/:username", (req, res) => {
//   console.log(req.params);
//   res.send("Username response");
// });

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params; //object destruture
  console.log(req.params); //http://localhost:3000/niraj/123
  res.send(`${username} with ${id} response`);
});

// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.send("no results");
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("No such query");
  }
  res.send("no results");
});
