import React from "react";
import styles from '../Styles/ProductHover.module.scss';

const ProductHover=(props)=>{
    return(
        <div className={styles.productHover}>
            <img src={props.image}/>
            <p>{props.name}</p>
            <p>{props.price}$</p>
        </div>
    )
}

export default ProductHover;