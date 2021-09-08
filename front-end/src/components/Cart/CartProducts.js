import React from "react";
import styles from "../Styles/CartProduct.module.scss";
import Button from "../UI/Button";

const CartProduct = (props) => {
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
        <Button id={styles.quantityBtn}>+</Button>
        <Button id={styles.quantityBtn}>-</Button>
        <Button id={styles.quantityBtn}>
          <i class="far fa-trash-alt"></i>
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
