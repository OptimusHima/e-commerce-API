const express = require("express");
const all_products = require("../models/Product");
const { route } = require("express/lib/application");
const product_Api = require('../controller/product.controllers')


const router = express.Router();

// router.get("/user", async (req, res) => {
//   try {
//     const users = await all_products.findAll();
//     res.json(users);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "internal Server error" });
//   }
// });

// router.post("/users", async (req, res) => {
//   try {
//     const newUsers = await all_products.create(req.body);
//     res.status(201).json(newUsers);
//   } catch (err) {
//     console.log("err", err);
//     res.status(500).json({ error: "internal 12 Server error" });
//   }
// });

router.get('/users',product_Api.getProduct)

router.post('/users',product_Api.create)

router.delete('/users/:id',product_Api.delete)

router.put('/users/:id',product_Api.update)

module.exports = router;
