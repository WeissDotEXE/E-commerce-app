const express=require('express');
const router=express.Router();
const Products=require('../model/Product');

router.get('/',async(req,res)=>{
    try{
        const products=await Products.find(); //display all products
        res.json(products);
        res.send(products);
    }catch(error){
        res.json({message:"something wrong with GET"})
    }
})

router.post('/',async(req,res)=>{
    console.log(req.body);
    const product=new Products({
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        description:req.body.description,
        review:req.body.review
    });
    try{
        const savedProduct=await product.save();
        res.json(savedProduct);
    }catch(error){
        res.json({message:'error POST'});
    }
})

//finding product by id
router.get('/:productId',async (req,res)=>{
    try{
        const product=await Products.findById(req.params.postId);
        res.json(product);
    }catch(error){
        res.json({message:error})
    }
})

//deleting product by id
//it works , but error is displayed
router.delete('/:productId',async(req,res)=>{
    try{
        const removedProduct=await Products.remove({_id:req.params.productId});
        res.json(removedProject)
    }catch(error){
        res.json({message:'delete error'});
    }
})

module.exports=router;