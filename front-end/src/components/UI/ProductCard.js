import React from 'react';
import styles from '../Styles/ProductCard.module.scss';
import Button from './Button';

import { useDispatch } from 'react-redux';
import {cartActions} from '../../store/cart';

const ProductCard=(props)=>{

    const dispatch = useDispatch()
    const addItemCart=()=>{
        console.log('a mers');
        dispatch(cartActions.addOneProduct(props.name));
    }

    return(
        <div className={styles.productCard}>
            <img src={props.image} />
            <h1>{props.name}</h1>
            <h1>{props.price} $</h1>
            <Button onClick={addItemCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;