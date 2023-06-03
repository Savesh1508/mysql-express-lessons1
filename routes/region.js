const express = require('express');
const router = express.Router()
const regionControllers = require('../controllers/region.js');

router.get("/", regionControllers.getAllRegions);

router.get("/:id", regionControllers.getRegionById);

router.post("/", regionControllers.createRegion);

router.put("/:id", regionControllers.updateRegionById)

router.delete("/:id", regionControllers.deleteRegionById);

module.exports = router