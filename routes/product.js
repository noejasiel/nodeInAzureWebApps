const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Movement = require("../models/movement");

router.post("/", async (req, res) => {
  console.log({ body: req.body });
  const newProduct = await new Product(req.body);

  await newProduct
    .save()
    .then((product) => {
      res.status(201).json({ ok: true, data: product });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
  // res.status(201).send("aqui yea");
});

router.get("/", async (req, res) => {
  // const productList = await Product.find({ delete: false }).sort({ _id: -1 });
  const productList = await Product.aggregate([
    {
      $match: { delete: false },
    },
    {
      $sort: { _id: -1 },
    },

    {
      $lookup: {
        from: "movements", //como se llama el documento
        localField: "_id",
        foreignField: "product",
        as: "movement", //como se va a llamar
      },
    },
    {
      $unwind: {
        path: "$movement",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: { _id: "$_id", curse: "$curse", price: "$price" },
        stock: {
          $sum: "$movement.quantity",
        },
      },
    },
    {
      $project: {
        name: "$_id._id",
        curse: "$_id.curse",
        price: "$_id.price",
        stock: 1,
      },
    },
    {
      $sort: { stock: -1 },
    },
  ]);
  res.status(200).json({ ok: true, data: productList });
  console.log(productList);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const update = await Product.findByIdAndUpdate(
    { _id: id },
    { delete: true },
    { new: true }
  );
  // const find = await Product.findById({ _id: id });
  res.status(200).json({ ok: true, message: "item removed" });
  console.log(update);
});

router.post("/movement/:productId", async (req, res) => {
  console.log({ body: req.body }); //aqui requiero el tipo, cantidad, el id del producto

  const { productId } = req.params;
  const { type, quantity } = req.body;
  const newMovement = await new Movement({
    type,
    quantity: type === "Compra" ? quantity : quantity * -1,
    product: productId,
  });

  await newMovement
    .save()
    .then((movement) => {
      res.status(201).json({ ok: true, data: movement });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
