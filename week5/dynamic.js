const express = require("express");
const app = express();
app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    res.send("Product ID is: " + id);
});
app.get("/student/:name/:id", (req, res) => {
    const name = req.params.name;
    const id = req.params.id;
    res.send("Student Name: " + name + "<br>Student ID: " + id);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});