import React, { useEffect } from "react";
import styles from "../Styles/OrderItem.module.scss";

const OrderItem = (props) => {
  const { firstName, lastName, products, payment, status,total } = props;

  useEffect(()=>{
    console.log(props);
  },[])

  return (
    <div className={styles.orderItem}>
      <div className={styles.name}>
          <h5>Name</h5>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>

      <div className={styles.payment}>
          <h5>Payment type</h5>
          <p>{payment}</p>
          {payment==='card'? <i class="fas fa-credit-card"></i> : <i class="fas fa-money-bill-wave-alt"></i>}
      </div>
      <div className={styles.orderedProducts}>
      {products.map((product) => (
          <div>
              <p>{product.name}</p>
              <p>X {product.quantity}</p>
              <p>{product.price} $</p>
          </div>
      ))}
      
      </div>
      <div className={styles.status}>
      <p id={styles.totalTxt}>Total price: {total} $</p>
          <h5>Status:</h5>
          <p>{status}</p>
      </div>
    </div>
  );
};

export default OrderItem;
