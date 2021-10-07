import React, { Fragment, useEffect, useState } from "react";
import styles from "../Styles/Hover.module.scss";

//import animation library
import { motion } from "framer-motion";

import Button from "./Button";
import ProductHover from "./ProductHover";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NoProducts from "../Error/NoProducts";

const HoverCart = (props) => {
  const [products, setProducts] = useState(
    useSelector((state) => state.cart.products)
  );
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Fragment>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.hover}
      >
        <h2>Your cart</h2>
        {products.map((product) => (
          <ProductHover
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
        {products.length === 0 && <NoProducts />}
        <h1>Total: {totalPrice} $</h1>
        {products.length !== 0 && (
          <Link to="/cart">
            <Button id={styles.sendBtn}>Send Order</Button>
          </Link>
        )}
      </motion.div>
    </Fragment>
  );
};

export default HoverCart;
