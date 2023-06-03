const express = require('express');
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 3030;

const routes = require("./routes/index.js");

// PARSE JSON BODIES
app.use(express.json());

// MOUNT ROUTES
app.use("/", routes);


app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishga tushdi`);
})