import React,{useState} from "react";
import styles from "../Styles/CartProduct.module.scss";
import Button from "../UI/Button";

import { useDispatch,useSelector } from "react-redux";
import cart, { cartActions } from "../../store/cart";

const CartProduct = (props) => {
  const dispatch = useDispatch();
  const [productQuantity,setProductQuantity]=useState(1);

  //action for products buttons(add,remove)
  const addOneProduct=()=>{
    dispatch(cartActions.addOneProduct(props))
    setProductQuantity(productQuantity+1)
    console.log(props);
  }
  const removeOneProduct=()=>{
    dispatch(cartActions.removeOneProduct(props));
    setProductQuantity(productQuantity-1)
  }
  const deleteProduct=()=>{
    console.log(props);
    dispatch(cartActions.deleteProduct(props,productQuantity))
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
      <p>{productQuantity}</p>
        <Button id={styles.quantityBtn} onClick={addOneProduct}>+</Button>
        <Button id={styles.quantityBtn} onClick={removeOneProduct}>-</Button>
        <Button id={styles.quantityBtn} onClick={deleteProduct}>
          <i class="far fa-trash-alt"></i>
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
