const express = require("express");

const app = express();
const port = 80; // Set port to 80

app.get("/sayHello", (req, res) => {
  res.json({ message: "Hello User" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
