const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./db/DB");
const routerProducts = require("./routes/product");

const app = express();

dbConnect(app);

app.use(cors({ origin: true }));

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/api/v1/curses", routerProducts);
