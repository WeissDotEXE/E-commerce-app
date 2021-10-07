import React, { Fragment, useEffect, useState } from "react";
import styles from "../Styles/Cart.module.scss";

import { useSelector, useDispatch } from "react-redux";
import Navbar from "../UI/Navbar";
import CartProduct from "./CartProducts";
import Button from "../UI/Button";
import NoProducts from "../Error/NoProducts";
import { Link } from "react-router-dom";
const Cart = () => {
  const [products, setProducts] = useState(
    useSelector((state) => state.cart.products)
  );
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalProducts = useSelector((state) => state.cart.totalProducts);

  // useEffect(() => {
  //   setProducts(products);
  // }, [products]);

  return (
    <Fragment>
      <Navbar />

      <div className={styles.cart}>
        <h1>Your cart: {totalProducts} products</h1>
        {products.length === 0 && <NoProducts />}
        {products.map((product) => (
          <CartProduct
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
        <h1>Total:{totalPrice} $</h1>
        {products.length!==0 && <Link to='/sendorder'><Button>Send Order</Button></Link>}
      </div>
    </Fragment>
  );
};

export default Cart;
