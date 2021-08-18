import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

//@desc   Fetch all products
//@route  GET /api/products/
//@access Public
router.get(
  "/", 
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  })
);

//@desc   Fetch single product using id
//@route  GET /api/products/:id
//@access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;