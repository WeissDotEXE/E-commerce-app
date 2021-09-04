import React from "react";
import styles from "../Styles/AdminProduct.module.scss";
import Button from "./Button";

const AdminProduct = (props) => {
  return (
    <div className={styles.adminProduct}>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.price} $</p>
      <p>{props.category}</p>
      <Button
        id={styles.updateBtn}
        onClick={() => props.updateProduct(props.id)}
      >
        Update
      </Button>
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
