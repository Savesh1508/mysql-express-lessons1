const db = require("../config/db")

exports.getAllRegions = (req, res) => {
    db.query("SELECT * FROM region", (error, results) => {
        if (error) {
            console.log("Error on retrieving regions: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json(results)
    })
}

exports.getRegionById = (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM region WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on retrieving region: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        if (results.length == 0) {
            return res.status(404).json({"error": "Region Not Found"})
        }
        res.json(results[0])
    })
}

exports.createRegion = (req, res) => {
    const { id, name } = req.body
    db.query("INSERT INTO region (id, name) values (?, ?)", [id, name] ,(error, results) => {
        if (error) {
            console.log("Error on creating region: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully created",
            "insertId": results.insertId
        })
    })
}

exports.updateRegionById = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    db.query("UPDATE region SET name = ? WHERE id = ?", [name, id] ,(error, results) => {
        if (error) {
            console.log("Error on updating region: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully updated"
        })
    })
}

exports.deleteRegionById = (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM region WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error on deleting region: ", error);
            return res.status(500).json({"error": "Iternal Server Error"})
        }
        res.json({
            "message": "Succesfully deleted",
        })
    })
}