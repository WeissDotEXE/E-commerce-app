import React, { useEffect } from "react";
import styles from "../Styles/OrderItem.module.scss";
import Button from "../UI/Button";

const OrderItem = (props) => {
  const { firstName, lastName, products, payment, status, total } = props;

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className={styles.orderItem}>
      <div className={styles.name}>
        <h4>Name</h4>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>

      <div className={styles.payment}>
        <h4>Payment type</h4>
        <p>{payment}</p>
        {payment === "card" ? (
          <i class="fas fa-credit-card"></i>
        ) : (
          <i class="fas fa-money-bill-wave-alt"></i>
        )}
      </div>
      <div>
        <h4>Ordered Products</h4>
        <div className={styles.orderedProducts}>
          {products.map((product) => (
            <div className={styles.products}>
              <p>{product.name}</p>
              <p>X {product.quantity}</p>
              {/* <p>{product.price} $</p> */}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.status}>
        <p id={styles.totalTxt}>Total price: {total} $</p>
        <h4>Status:</h4>
        <p>{status}</p>
        <Button>Ready</Button>
      </div>
    </div>
  );
};

export default OrderItem;
