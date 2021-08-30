const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    name:{
        type:String,
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    review:{
        type:Number
    }
})

module.exports=mongoose.model("ProductSchema",ProductSchema);