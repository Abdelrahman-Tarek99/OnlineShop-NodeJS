const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");
const router = express.Router();

// MORE SPECIFIC ROUTE SHOULD BE PLACED FIRST

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/add-product => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product",adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.get("/delete-product/:productId", adminController.postDeleteProduct);
module.exports = router;
