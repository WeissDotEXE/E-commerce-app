const mongoose=require('mongoose');

const AdminSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('AdminSchema',AdminSchema);