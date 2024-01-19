const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title:{
    type:String,
    required:true,

  },
  description:{
    type:String
  },
  duedate:{
    type:Date
  },
  priority:{
    type:String,
    enums:['low','medium',"high"]
  },
  completed:{
    type:"Boolean",
    default:false
  },
  createdAt:{
    type:Date,
    default:Date.now,
  },
  tags:[{
    type:String,
  }]
}
)

const Todo = mongoose.model('Todo',todoSchema)
module.exports= Todo;

