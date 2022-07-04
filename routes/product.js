const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.post("/", async (req, res) => {
  console.log({ body: req.body });
  const newProduct = await new Product(req.body);

  await newProduct
    .save()
    .then((response) => {
      res.status(201).json({ ok: true });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
  // res.status(201).send("aqui yea");
});

module.exports = router;
