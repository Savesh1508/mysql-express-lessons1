const db = require("../config/db")

exports.getAllDistricts = (req, res) => {
    db.query("SELECT * FROM district", (error, results) => {
        if (error) {
            console.log("Error on retrieving districts: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json(results)
    })
}

exports.getDistrictById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM district WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on retrieving district: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        if (results.length == 0) {
            return res.status(404).json({"error": "District Not Found"})
        }
        res.json(results[0])
    })
}

exports.createDistrict = (req, res) => {
    const { name, region_id } = req.body
    db.query("INSERT INTO district (name, region_id) values (?, ?)", [name, region_id] ,(error, results) => {
        if (error) {
            console.log("Error on creating district: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully created",
            "insertId": results.insertId
        })
    })
}

exports.updateDistrictById = (req, res) => {
    const { id } = req.params
    const { name, region_id } = req.body
    db.query("UPDATE district SET name = ?, region_id = ? WHERE id = ?", [name, region_id, id] ,(error, results) => {
        if (error) {
            console.log("Error on updating district: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully updated"
        })
    })
}

exports.deleteDistrictById = (req, res) => {
    const districId = req.params.id
    db.query("DELETE FROM district WHERE id = ?", [districId], (error, results) => {
        if (error) {
            console.log("Error on deleting district: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully deleted",
        })
    })
}