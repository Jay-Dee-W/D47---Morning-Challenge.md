const mongoose = require('mongoose');


const PizzaSchema = new mongoose.Schema({
 name:{
     type:String,
     required:true,
 },
 price:{
     type:Number,
 },
 ingredients:{
    type: [String],
}
}, {timestamps: true,})

const PizzaModule=new mongoose.model('Pizza',PizzaSchema);
module.exports=PizzaModule;