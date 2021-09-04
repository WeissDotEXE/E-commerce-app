import React, { Fragment, useState, useEffect,useCallback } from "react";
import styles from "../Styles/Admin.module.scss";

import AdminNav from "./AdminNav";
import AddProduct from "./AddProduct";
import AdminProduct from "../UI/AdminProduct";
import ProductCard from "../UI/ProductCard";
const Admin = () => {
  const [products, setProducts] = useState([]);

  const fetchDataHandler = useCallback( async () => {
    try {
      const response = await fetch("http://localhost:4000/products/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },[]);

  //function for deleting a product
  const deleteProductHandler=async(id)=>{
      try{
        const response=await fetch(`http://localhost:4000/products/${id}`,{
            method:"DELETE",
        });
        const data=await response.json();
        console.log(data);
        fetchDataHandler()
      }catch(error){
          console.log(error);
      }
  }

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <div className={styles.admin}>
      <AdminNav />
      <div className={styles.content}>
          {products.length===0 && <p>No Products</p>}
        {products.map((product) => (
          <AdminProduct
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
            deleteProduct={deleteProductHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
