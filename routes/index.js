const express = require('express');
const router = express.Router()

const regionRoutes = require("./region.js");
const districtRoutes = require("./district.js");
const pharmaciesRoutes = require("./pharmacies.js")
const stockRoutes = require("./stock.js")
const medicinesRoutes = require("./medicines.js")
const medicineTypeRoutes = require("./medicine_type.js")
const finderRoute = require("./finder.js")

router.use("/regions", regionRoutes);

router.use("/districts", districtRoutes);

router.use("/pharmacies", pharmaciesRoutes);

router.use("/stock", stockRoutes);

router.use("/medicines", medicinesRoutes);

router.use("/medicinetype", medicineTypeRoutes);

router.use("/finder", finderRoute);

module.exports = router