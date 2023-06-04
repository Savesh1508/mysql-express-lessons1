const express = require('express');
const finder = require("../controllers/finder.js")
const router = express.Router();

router.get("/", finder.findByName);

router.get("/region", finder.findByNameAndRegion);

module.exports = router;