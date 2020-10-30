const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classesSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    difficulty:{type:String, required:true},
    content:String
});

const classesModel = mongoose.model("classes", classesSchema);

module.exports = classesModel;