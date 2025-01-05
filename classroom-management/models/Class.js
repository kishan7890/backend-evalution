const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    name:{type:String,required:true},
    subject:{type:String},
    teacherName:{type:String},
    startDate:{type:String},
    endDate:{type:String}
})

module.exports = mongoose.model('Class', classSchema);