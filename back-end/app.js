const express=require('express');
const app= express();
const cors=require('cors');
const mongoose = require('mongoose');
//middlewares


app.use(cors());
app.use(express.json());

//import env for hiding keys
require('dotenv/config');

//default route
app.get('/',(req,res)=>{
    res.send('homee')
})

//import routes
const adminRoute=require('./routes/admin');
const productsRoute=require('./routes/products');

app.use('/products',productsRoute);
app.use('/admin',adminRoute);

//connect to mongoDb
mongoose.connect(
    process.env.DB_CONNECTION,
  ()=>{
      console.log("CONNECTED TO MONGO");
  }
)

app.listen(4000);