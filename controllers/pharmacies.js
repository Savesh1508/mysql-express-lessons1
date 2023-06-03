const db = require("../config/db")

exports.getAllPharmacies = (req, res) => {
    db.query("SELECT * FROM pharmacies", (error, results) => {
        if (error) {
            console.log("Error on retrieving pharmacies: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json(results)
    })
}

exports.getPharmacyById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM pharmacies WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on retrieving pharmacy: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        if (results.length == 0) {
            return res.status(404).json({"error": "Pharmacy Not Found"})
        }
        res.json(results[0])
    })
}

exports.createPharmacy = (req, res) => {
    const { name, address, location, phone, email, region_id, district_id } = req.body
    db.query("INSERT INTO pharmacies (name, address, location, phone, email, region_id, district_id) values (?, ?, ?, ?, ?, ?, ?)",
    [name, address, location, phone, email, region_id, district_id] ,(error, results) => {
        if (error) {
            console.log("Error on creating pharmacy: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully created",
            "insertId": results.insertId
        })
    })
}

exports.updatePharmacyById = (req, res) => {
    const { id } = req.params
    const { name, address, location, phone, email, region_id, district_id } = req.body
    db.query("UPDATE pharmacies SET name = ?, address = ?, location = ?, phone = ?, email = ?, region_id = ?, district_id = ? WHERE id = ?",
    [name, address, location, phone, email, region_id, district_id, id] ,(error, results) => {
        if (error) {
            console.log("Error on updating pharmacy: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully updated"
        })
    })
}

exports.deletePharmacyById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM pharmacies WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on deleting pharmacy: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully deleted",
        })
    })
}