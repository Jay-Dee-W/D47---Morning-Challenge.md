const mongoose = require('mongoose');


const OrderItemSchema = new mongoose.Schema({
    pizza: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Pizza'

    },
    quantity: {
        type: Number,
    }
}, {timestamps: true,})


const OrderItemModule = new mongoose.model('OrderItem', OrderItemSchema);
module.exports = OrderItemModule;