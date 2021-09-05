import React from 'react';
import styles from '../Styles/AdminNav.module.scss';

import Button from '../UI/Button';

import {Link} from "react-router-dom";
const AdminNav=()=>{
    return(
        <div className={styles.adminNav}>
            <Link to="/admin"><h1 id={styles.logo}>E-commerce Admin</h1></Link>
            <Link to="/admin/add-product"><Button id={styles.addProductBtn}>Add Product</Button></Link>
            <h1>Hello</h1>
            <h1>Hello</h1>
        </div>
    )
}

export default AdminNav;