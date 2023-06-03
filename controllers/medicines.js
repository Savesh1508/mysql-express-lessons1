const db = require("../config/db");

exports.getAllMedicines = (req, res) => {
    db.query("SELECT * FROM medicines", (error, results) => {
        if (error) {
            console.log("Error on retrieving medicines");
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json(results)
    })
}

exports.getMedicineById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM medicines WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on retrieving medicine: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        if (results.length == 0) {
            return res.status(404).json({"error": "Medicine Not Found"})
        }
        res.json(results[0])
    })
}

exports.createMedicine = (req, res) => {
    const { name, manufacturer, medicine_type_id, price, expiry_date, info } = req.body
    db.query("INSERT INTO medicines (name, manufacturer, medicine_type_id, price, expiry_date, info) values (?, ?, ?, ?, ?, ?)",
    [name, manufacturer, medicine_type_id, price, expiry_date, info] ,(error, results) => {
        if (error) {
            console.log("Error on creating medicine: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully created",
            "insertId": results.insertId
        })
    })
}

exports.updateMedicineById = (req, res) => {
    const { id } = req.params
    const { name, manufacturer, medicine_type_id, price, expiry_date, info } = req.body
    db.query("UPDATE medicines SET name = ?, manufacturer = ?, medicine_type_id = ?, price = ?, expiry_date = ?, info = ? WHERE id = ?",
    [name, manufacturer, medicine_type_id, price, expiry_date, info, id] ,(error, results) => {
        if (error) {
            console.log("Error on updating medicine: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully updated"
        })
    })
}

exports.deleteMedicineById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM medicines WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on deleting medicine: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully deleted",
        })
    })
}