const mongoose = require('mongoose')

const Customer = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    size : {
        type : String,
        required : true,
        enum : ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']
    },
    id : {
        type : Number,
        required : true,
        unique : true
    },
    waist : {
        type : Number,
        required : true,
        enum : [26, 28, 30, 32, 34, 36, 38, 40, 42]
    },
    gender : {
        type : String,
        required : true,
        enum : ['male', 'female', 'other']
    }
})

const CustomerInfo = mongoose.model('customers', Customer)

module.exports = CustomerInfo;