import React, { Fragment } from 'react';
import styles from '../Styles/AddProduct.module.scss';

import AdminNav from './AdminNav';
const AddProduct=()=>{
    return(
        <div className={styles.addProduct}>
            <AdminNav />
            <div className={styles.content}>
                <h1>AddProduct</h1>
            </div>
        </div>
    )
}

export default AddProduct;