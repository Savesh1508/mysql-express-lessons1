const db = require("../config/db.js");

exports.findByName = (req, res) => {
    const { medicine } = req.body
    db.query(
        "SELECT medicines.id, medicines.name, pharmacies.name as filial, pharmacies.address, pharmacies.location, pharmacies.phone, pharmacies.email, region.name as region FROM medicines JOIN stock ON medicines.id = stock.medicine_id JOIN pharmacies ON stock.pharmacy_id = pharmacies.id JOIN region ON pharmacies.region_id = region.id WHERE medicines.name = ?",
        [medicine], (error, results) => {
            if (error) {
                console.log("Error on retrieving medicine");
                return res.status(500).json({"error":"Iternal Server Error"})
            }
            if (results.length == 0) {
                return res.json({"error": "Medicine not found"})
            }
            res.json(results);
        }
    )
}

exports.findByNameAndRegion = (req, res) => {
    const { medicine, region } = req.body
    db.query(
        "SELECT pharmacies.id as filial_id, pharmacies.name as exists_on, pharmacies.address, pharmacies.location, pharmacies.phone, pharmacies.email, region.name as region FROM medicines JOIN stock ON medicines.id = stock.medicine_id JOIN pharmacies ON stock.pharmacy_id = pharmacies.id JOIN region ON pharmacies.region_id = region.id WHERE medicines.name = ? AND region.name = ?",
        [medicine, region], (error, results) => {
            if (error) {
                console.log("Error on retrieving medicine");
                return res.status(500).json({"error":"Iternal Server Error"})
            }
            if (results.length == 0) {
                return res.json({"error": "Medicine not found"})
            }
            res.json(results);
        }
    )
}



