const mng= require("mongoose");

const CourseSchema = mng.Schema({
    title:{type:String, required:true},
    date: {type:Date, default:Date.now},
});

module.exports = mng.model("CourseTable",CourseSchema);