import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "../Styles/ProductDetail.module.scss";
import Button from "../UI/Button";
import Navbar from "../UI/Navbar";
import Notification from "../UI/Notification";

import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [product, setProduct] = useState({});
  const showNotification = useSelector((state) => state.cart.showNotification);

  const fetchProducthandler = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/products/${params.productId}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducthandler();
  }, []);

  const addItemCart = () => {
      const addProduct={
        id:product._id,
        name:product.name,
        price:product.price,
        image:product.image,
         
      }
    dispatch(cartActions.addItemToCart(addProduct));

    //function for showing notification when product id added to cart
    dispatch(cartActions.showNotification());
    setTimeout(() => {
      dispatch(cartActions.hideNotification());
    }, 3000);
  };

  return (
    <Fragment>
      <Navbar />
      <div className={styles.productDetail}>
        <div className={styles.header}>
          <div className={styles.leftSide}>
            <img src={product.image} />
          </div>
          <div className={styles.rightSide}>
            <h1>{product.name}</h1>
            <h1 id={styles.price}>{product.price} $</h1>
            <Button onClick={addItemCart} id={styles.addCartBtn}>Add to Cart</Button>
          </div>
        </div>
        <div className={styles.description}>
          <p>{product.description}</p>
        </div>
        {showNotification && (
        <Notification message="You have successfully added your product to cart" />
      )}
      </div>
      
    </Fragment>
  );
};

export default ProductDetail;
