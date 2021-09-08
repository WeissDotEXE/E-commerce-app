import React from "react";
import styles from '../Styles/NoProducts.module.scss';


const NoProducts=(props)=>{
    return(
        <div className={`${styles.noProduct} ${props.className}`}>
            <i class="far fa-frown"></i>
            <p>It seems like you don't have any product in your cart</p>
        </div>
    )
}

export default NoProducts;