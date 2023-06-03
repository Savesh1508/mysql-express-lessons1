const express = require('express');
const router = express.Router();
const stockControllers = require("../controllers/stock.js");

router.get("/", stockControllers.getAllStock);

router.get("/:id", stockControllers.getStockElementById);

router.post("/", stockControllers.createStockElement);

router.put("/:id", stockControllers.updateStockElementById);

router.delete("/:id", stockControllers.deleteStockElementById);

module.exports = router