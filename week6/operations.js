const express = require("express");
const app = express();
app.use(express.json());
let students = [
    { id: 1, name: "Mohana" },
    { id: 2, name: "Lakshmi" }
];
// i) Implement GET, POST, PUT, DELETE
app.get("/students", (req, res) => {
    res.json(students);
});
app.post("/students", (req, res) => {
    const student = req.body;
    students.push(student);
    res.json({
        message: "Student added successfully",
        student: student
    });
});
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        student.name = req.body.name;
        res.json({
            message: "Student updated successfully",
            student: student
        });
    } else {
        res.send("Student not found");
    }
});
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});
// ii) Send and receive JSON
app.get("/data", (req, res) => {
    res.json({
        name: "Mohana",
        course: "AIML",
        year: 2
    });
});
// iii) Delete a resource
app.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);
    res.send("Resource deleted successfully");
});
// iv) Creating custom middleware
const checkUser = (req, res, next) => {
    console.log("Middleware is executed");
    next();
};
app.get("/home", checkUser, (req, res) => {
    res.send("Welcome to Home Page");
});
// v) Logging requests
app.use((req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});