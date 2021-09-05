import React, { Fragment, useState } from "react";
import styles from "../Styles/AdminProduct.module.scss";
import { Link } from "react-router-dom";

import Button from "./Button";

import { useDispatch } from "react-redux";
import { updateActions } from "../../store/updateProduct";

const AdminProduct = (props) => {

  const dispatch = useDispatch();

  //send information to update through redux
  const updateHandler=()=>{
    dispatch(updateActions.getName(props.name));
    dispatch(updateActions.getCategory(props.category));
    dispatch(updateActions.getPrice(props.price));
    dispatch(updateActions.getDescription(props.description));
    dispatch(updateActions.getImage(props.image));
    dispatch(updateActions.getId(props.id));
    console.log(props);
  }

  return (
    <div className={styles.adminProduct}>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.price} $</p>
      <p>{props.category}</p>
      <Link to="/admin/update-product"><Button onClick={updateHandler} id={styles.updateBtn}>Update</Button></Link>
      <Button
        id={styles.deleteBtn}
        onClick={() => props.deleteProduct(props.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default AdminProduct;
