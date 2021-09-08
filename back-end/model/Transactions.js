const mongoose=require('mongoose');

const TransactionSchema=mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String
    },
    payment:{
        type:String
    },
    status:{
        type:String,
        default:'pending'
    }
})

module.exports=mongoose.model("TransactionSchemaa",TransactionSchema);