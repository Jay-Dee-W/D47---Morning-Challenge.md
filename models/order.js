const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({

   Items:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'OrderItem'

 }
});

const OrderModule=new mongoose.model('Order',OrderSchema);
module.exports=OrderModule;