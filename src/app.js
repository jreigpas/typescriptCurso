const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send('<p style="color:blue;background-color:powderblue;">Servidor levantado<p>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
