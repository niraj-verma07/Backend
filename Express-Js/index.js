const express = require("express");
const app = express();
// console.dir(app);
let port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

//Sending request to server
app.use((req, res) => {
  console.log("New Request recived");
  //Sending response to the user
  //   res.send("This is the response"); //Normal text message
  //   res.send({ // Object
  //     name: "Niraj",
  //     OS: "Windows",
  //   });

  res.send("<h1>HTML tag</h1>"); //Html tag
});
