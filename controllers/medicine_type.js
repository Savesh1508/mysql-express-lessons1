const db = require("../config/db")

exports.getAllMedicineTypes = (req, res) => {
    db.query("SELECT * FROM medicinetype", (error, results) => {
        if (error) {
            console.log("Error on retrieving medicine types: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json(results)
    })
}

exports.getMedicineTypeById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM medicinetype WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on retrieving medicine type: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        if (results.length == 0) {
            return res.status(404).json({"error": "Medicine Type Not Found"})
        }
        res.json(results[0])
    })
}

exports.createMedicineType = (req, res) => {
    const { id, name } = req.body
    db.query("INSERT INTO medicinetype (id, name) values (?, ?)", [id, name] ,(error, results) => {
        if (error) {
            console.log("Error on creating medicine type: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully created",
            "insertId": results.insertId
        })
    })
}

exports.updateMedicineTypeById = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    db.query("UPDATE medicinetype SET name = ? WHERE id = ?", [name, id] ,(error, results) => {
        if (error) {
            console.log("Error on updating medicine type: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully updated"
        })
    })
}

exports.deleteMedicineTypeById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM medicinetype WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on deleting medicine type: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully deleted",
        })
    })
}