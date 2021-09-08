import React, { Fragment, useEffect, useState } from "react";
import styles from "../Styles/Cart.module.scss";

import { useSelector, useDispatch } from "react-redux";
import Navbar from "../UI/Navbar";
import CartProduct from "./CartProducts";
import Button from "../UI/Button";
import NoProducts from "../Error/NoProducts";
const Cart = () => {
  const [products, setProducts] = useState(
    useSelector((state) => state.cart.products)
  );
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useEffect(()=>{
      console.log(products);
  },[])

  return (
    <Fragment>
      <Navbar />
      
      <div className={styles.cart}>
      <h1>Your cart</h1>
      {products.length===0 && <NoProducts/>}
      {products.map((product) => (
          <CartProduct
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
        <h1>Total:{totalPrice} $</h1>
        <Button>Send Order</Button>
      </div>
    </Fragment>
  );
};

export default Cart;
