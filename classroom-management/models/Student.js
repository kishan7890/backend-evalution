const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    email:{type:String,required:true,unique:true}
    
})

module.exports = mongoose.model('Class', studentSchema);