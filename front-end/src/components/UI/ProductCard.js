import React from "react";
import styles from "../Styles/ProductCard.module.scss";
import Button from "./Button";

import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { favActions } from "../../store/favourite";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const isFavourite=useSelector(state=>state.favourite.isFavourite)

  const addItemCart = () => {
    console.log("a mers");
    dispatch(cartActions.addOneProduct(props.name));

    //fucntion for update isFavourite
    const isFavouriteHandler=async()=>{
      try{
        const response=await fetch(`http://localhost:4000/products/${props.key}`,{
          method:'PUT',
          body:JSON.stringify({
            'Accept':'application/json',
            'Content-Type':'application/json'
          }),
          body:JSON.stringify()
        })
      }catch(error){
        console.log(error);
      }
    }
    

    //function for showing notification when product id added to cart
    dispatch(cartActions.showNotification());
    setTimeout(() => {
      dispatch(cartActions.hideNotification());
    }, 3000);
  };

  const addItemFav=()=>{
    dispatch(favActions.addProduct())
  }

  return (
    <div className={styles.productCard}>
      <img src={props.image} />
      <h1>{props.name}</h1>
      <h1>{props.price} $</h1>
      {isFavourite ? <i onClick={addItemFav} class="fas fa-heart"></i>:<i class="far fa-heart"></i>}
      <Button onClick={addItemCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
