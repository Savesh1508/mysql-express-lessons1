const express = require('express');
const router = express.Router()
const medicinesControllers = require('../controllers/medicines.js')

router.get("/", medicinesControllers.getAllMedicines);

router.get("/:id", medicinesControllers.getMedicineById);

router.post("/", medicinesControllers.createMedicine);

router.put("/:id", medicinesControllers.updateMedicineById)

router.delete("/:id", medicinesControllers.deleteMedicineById);

module.exports = router