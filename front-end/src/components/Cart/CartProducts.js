import React from "react";
import styles from "../Styles/CartProduct.module.scss";
import Button from "../UI/Button";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartProduct = (props) => {

  const dispatch = useDispatch();

  //action for products buttons(add,remove)
  const addOneProduct=()=>{
    dispatch(cartActions.addOneProduct(props))
  }
  const removeOneProduct=()=>{
    dispatch(cartActions.removeOneProduct(props))
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
        <Button id={styles.quantityBtn} onClick={addOneProduct}>+</Button>
        <Button id={styles.quantityBtn} onClick={removeOneProduct}>-</Button>
        <Button id={styles.quantityBtn}>
          <i class="far fa-trash-alt"></i>
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
