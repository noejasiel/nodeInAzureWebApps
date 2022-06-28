const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    `mongodb+srv://jasiel:${process.env.PASSWORD_BBDD}@development.eu72k.mongodb.net/firstDBMongo?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// const productSchema = mongoose.Schema(
//   {
//     curseValue: { type: String, required: true },
//     priceValue: Number,
//   },
//   {
//     timestamps: true,
//   }
// );

// const Product = mongoose.model("Product", productSchema);

// app.post("/api/v1/curses", (req, res) => {
//   console.log({ body: req.body });
//   const newProduct = new Product(req.body);
//   newProduct
//     .save()
//     .then(() => {
//       res.status(201).json({ ok: true });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
