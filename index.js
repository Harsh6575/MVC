const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

const app = express();
const port = 4000;
app.set("view engine", "ejs"); //
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

app.use("/", require("./routes/Employee"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/register`)
});