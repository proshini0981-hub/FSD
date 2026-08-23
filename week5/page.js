const express = require("express");
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log("Server is running on port " + port);
});
app.get("/",(req,res)=>{
    res.send("Welcome to my Express Server");
});
app.get("/about",(req,res)=>{
    res.send("This is About page");
});
app.get("/contact",(req,res)=>{
    res.send("This is Contact page");
});
app.get("/user/:name",(req, res)=>{
    const name=req.params.name;
    res.send("Hello "+name);
});
app.get("/student/:id",(req, res)=>{
    const id=req.params.id;
    res.send("Student ID is "+id);
});
app.get("/search",(req,res)=>{
    const name=req.query.name;
    const age=req.query.age;
    res.send("Name: "+name+"<br>Age: "+age);
});