const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HOLA MUNDO</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`escuchando en el puerto ${PORT}`);
});
