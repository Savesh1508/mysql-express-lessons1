const express = require('express');
const router = express.Router()
const pharmaciesControllers = require('../controllers/pharmacies.js')

router.get("/", pharmaciesControllers.getAllPharmacies);

router.get("/:id", pharmaciesControllers.getPharmacyById);

router.post("/", pharmaciesControllers.createPharmacy);

router.put("/:id", pharmaciesControllers.updatePharmacyById)

router.delete("/:id", pharmaciesControllers.deletePharmacyById);

module.exports = router