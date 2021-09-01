import React from 'react';
import styles from '../Styles/AdminNav.module.scss';

import Button from '../UI/Button';

import {Link} from "react-router-dom";
const AdminNav=()=>{
    return(
        <div className={styles.adminNav}>
            <h1>E-commerce Admin</h1>
            <Link to="/admin/addproduct"><Button>Add Product</Button></Link>
            <h1>Hello</h1>
            <h1>Hello</h1>
        </div>
    )
}

export default AdminNav;