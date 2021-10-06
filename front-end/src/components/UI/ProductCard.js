import React from "react";
import styles from "../Styles/ProductCard.module.scss";
import Button from "./Button";

import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { favActions } from "../../store/favourite";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const {name,price,image,id}=props;
  const dispatch = useDispatch();
  const isFavourite=useSelector(state=>state.favourite.isFavourite)

  //function that adds products in an object
  //that is send to redux store
  const addItemCart = () => {
    console.log("a mers");
    const addProductCart={
      name,
      price,
      image,
      id,
    }
    dispatch(cartActions.addItemToCart(addProductCart))
    
    //function for showing notification when product id added to cart
    dispatch(cartActions.showNotification());
    setTimeout(() => {
      dispatch(cartActions.hideNotification());
    }, 3000);
  };

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

  const addItemFav=()=>{
    dispatch(favActions.addProduct())
  }

  return (
    <Link id={styles.link} to={`/products/${props.id}`} ><div className={styles.productCard}>
      <img src={props.image} />
      <h1>{props.name}</h1>
      <h1>{props.price} $</h1>
      {isFavourite ? <i onClick={addItemFav} class="fas fa-heart"></i>:<i class="far fa-heart"></i>}
      <Button onClick={addItemCart}>Add to cart</Button>
    </div>
    </Link>
  );
};

export default ProductCard;
