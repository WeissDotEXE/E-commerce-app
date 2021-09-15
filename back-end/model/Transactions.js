const mongoose=require('mongoose');

const TransactionSchema=mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    address:{
        type:String
    },
    payment:{
        type:String
    },
    products:{
        type:Object
    },
    totalPrice:{
        
    },
    status:{
        type:String,
        default:'pending'
    }
})

module.exports=mongoose.model("TransactionSchemaa",TransactionSchema);