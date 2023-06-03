const db = require("../config/db");

exports.getAllStock = (req, res) => {
    db.query("SELECT * FROM stock", (error, results) => {
        if (error) {
            console.log("Error on retrieving stock elements");
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json(results)
    })
}

exports.getStockElementById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM stock WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on retrieving stock element: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        if (results.length == 0) {
            return res.status(404).json({"error": "Stock Element Not Found"})
        }
        res.json(results[0])
    })
}

exports.createStockElement = (req, res) => {
    const { pharmacy_id, medicine_id, quantity } = req.body
    db.query("INSERT INTO stock (pharmacy_id, medicine_id, quantity) values (?, ?, ?)",
    [pharmacy_id, medicine_id, quantity] ,(error, results) => {
        if (error) {
            console.log("Error on creating stock element: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully created",
            "insertId": results.insertId
        })
    })
}

exports.updateStockElementById = (req, res) => {
    const { id } = req.params
    const { pharmacy_id, medicine_id, quantity } = req.body
    db.query("UPDATE stock SET pharmacy_id = ?, medicine_id = ?, quantity = ? WHERE id = ?",
    [pharmacy_id, medicine_id, quantity, id] ,(error, results) => {
        if (error) {
            console.log("Error on updating stock element: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully updated"
        })
    })
}

exports.deleteStockElementById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM stock WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on deleting stock element: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully deleted",
        })
    })
}