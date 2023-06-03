const express = require('express');
const districtControllers = require("../controllers/district.js")
const router = express.Router();

router.get("/", districtControllers.getAllDistricts);

router.get("/:id", districtControllers.getDistrictById);

router.post("/", districtControllers.createDistrict);

router.put("/:id", districtControllers.updateDistrictById)

router.delete("/:id", districtControllers.deleteDistrictById);

module.exports = router;