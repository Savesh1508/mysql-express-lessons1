const express = require('express');
const router = express.Router()
const medicineTypeControllers = require('../controllers/medicine_type.js');

router.get("/", medicineTypeControllers.getAllMedicineTypes);

router.get("/:id", medicineTypeControllers.getMedicineTypeById);

router.post("/", medicineTypeControllers.createMedicineType);

router.put("/:id", medicineTypeControllers.updateMedicineTypeById)

router.delete("/:id", medicineTypeControllers.deleteMedicineTypeById);

module.exports = router