import React, { Fragment } from 'react';
import styles from '../Styles/Admin.module.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import AdminNav from './AdminNav';
import AddProduct from './AddProduct';

const Admin=()=>{
    return(
        <AdminNav />
    )
}

export default Admin;