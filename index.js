const express = require("express");
const app = express();

require("dotenv/config");


const mng = require("mongoose");

mng.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => 
    console.log("Mongo Conntected successfully"));

const Course = require("./model/course")
app.use(express.json());

// app.get()
// app.post()
// app.put()
// app.delete()
app.get("/", (req,res) => {
    res.send("Hello World Simru");
});

app.get("/api/courses", async(req,res) => {
    try{
        const courses = await Course.find();
        res.json(courses);
    }catch(err){
        console.log(err);
        res.json({message:err})
    }
});

app.get("/api/courses/:id", async(req,res) => {
    try{
        const course = await Course.findById(req.params.Id);
        res.json(course);
    }catch(err){
        console.log(err);
        res.json({message:err})
    }
});

app.post("/api/courses", async(req,res) => {
    const course = new Course({
        title:req.body.title,
    });

    try{
        const savedCourse = await course.save();
        res.json(savedCourse);
    }catch(err){
        console.log(err);
        res.json({message:err})
    }    
});

const port = process.env.PORT_NUMBER || 5000;
app.listen(port, () => {
    console.log(`Listening is started on port [${port}]`);
});