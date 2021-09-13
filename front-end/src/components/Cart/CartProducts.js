import React,{useState} from "react";
import styles from "../Styles/CartProduct.module.scss";
import Button from "../UI/Button";

import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const CartProduct = (props) => {
  const dispatch = useDispatch();
 
  //action for products buttons(add,remove)
  const addOneProduct=()=>{
    dispatch(cartActions.addItemToCart(props))
    console.log(props);
  }
  const removeOneProduct=()=>{
    console.log(props);
    dispatch(cartActions.removeItemFromCart(props.id));
  }

  return (
    <div className={styles.cartProduct}>
      <img src={props.image} />
      <div>
        <p className={styles.header}>Product name</p>
        <p>{props.name}</p>
      </div>
      <div>
        <p className={styles.header}>Price</p>
        <p>{props.price} $</p>
      </div>
      
      <div className={styles.buttons}>
      <p>{props.quantity}</p>
        <Button id={styles.quantityBtn} onClick={addOneProduct}>+</Button>
        <Button id={styles.quantityBtn} onClick={removeOneProduct}>-</Button>
      </div>
    </div>
  );
};

export default CartProduct;
