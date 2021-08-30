const express=require('express');
const router=express.Router();
const Admin=require('../model/Admin');

router.post('/',async (req,res)=>{
    console.log(req.body);
    const admin=new Admin({
        id:req.body.id,
        password:req.body.password
    })
})

module.exports=router;