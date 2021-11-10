import React, { Fragment, useEffect, useState } from "react";
import styles from "../Styles/Admin.module.scss";
import Button from "../UI/Button";
import AdminNav from "./AdminNav";
import OrderItem from "./OrderItem";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  //fucntion for fetching data from server
  //for showing all orders that were placed
  const fetchDataHandler = async () => {
    try {
      const response = await fetch("http://localhost:4000/transactions/");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <div className={styles.admin}>
      <AdminNav />
      <div className={styles.orders}>
        <div className={styles.header}>
          <h1>Orders</h1>
          <div className={styles.showOrders}>
            <h3>Show By Status</h3>
            <Button>Pending</Button>
            <Button>Completed</Button>
          </div>
        </div>
        {orders.map((order) => (
          <OrderItem
            key={order._id}
            id={order._id}
            firstName={order.firstName}
            lastName={order.lastName}
            payment={order.payment}
            products={order.products}
            status={order.status}
            adress={order.adress}
            total={order.totalPrice[0]}
          />
        ))}
        {orders.totalPrice}
      </div>
    </div>
  );
};

export default Orders;
