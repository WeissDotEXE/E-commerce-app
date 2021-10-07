import React, { Fragment, useState } from "react";
import styles from "../Styles/SendOrder.module.scss";

import Form from "../UI/Form";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import ProductHover from "../UI/ProductHover";
import { Link } from "react-router-dom";

const SendOrder = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [payment, setPayment] = useState("card");
  const [products, setProducts] = useState(
    useSelector((state) => state.cart.products)
  );
  const totalPrice = useState(useSelector((state) => state.cart.totalPrice));

  //function for sending order to back-end(POST request)
  const sendOrderHandler = async (e) => {
    e.preventDefault();
    const postOrder = {
      firstName,
      lastName,
      adress,
      payment,
      products,
      totalPrice,
    };
    try {
      const response = await fetch("http://localhost:4000/transactions", {
        method: "POST",
        body: JSON.stringify(postOrder),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const adressHandler = (event) => {
    setAdress(event.target.value);
  };
  const paymentHandler = (event) => {
    setPayment(event.target.value);
  };

  return (
    <Fragment id={styles.sendOrder}>
      <Link to="/cart">
        <Button id={styles.backBtn}>Back</Button>
      </Link>
      <h1 id={styles.headerTxt}>Send order</h1>
      <Form onSubmit={sendOrderHandler}>
        <div className={styles.name}>
          <label htmlFor="fName">First name</label>
          <input
            type="text"
            id="fName"
            value={firstName}
            onChange={firstNameHandler}
          />

          <label htmlFor="lname">Last name</label>
          <input type="text" value={lastName} onChange={lastNameHandler} />
        </div>

        <label htmlFor="adress">Adress</label>
        <input type="text" value={adress} onChange={adressHandler} />

        <div className={styles.payment}>
          <h1>Payment type </h1>
          <input
            type="radio"
            id="card"
            name="card"
            value="card"
            checked={payment === "card"}
            onChange={paymentHandler}
          />
          <label htmlFor="card">
            Card <i class="fas fa-credit-card"></i>
          </label>
          <input
            type="radio"
            id="cash"
            name="cash"
            value="cash"
            checked={payment === "cash"}
            onChange={paymentHandler}
          />
          <label htmlFor="cash">
            Cash <i class="fas fa-money-bill-wave-alt"></i>
          </label>
        </div>

        <div className={styles.products}>
          {products.map((product) => (
            <ProductHover
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              image={product.image}
            />
          ))}
          <h1>Total price: {totalPrice}$</h1>
        </div>
        <Button id={styles.submitBtn} type="submit">
          Send order for real now!
        </Button>
      </Form>
    </Fragment>
  );
};

export default SendOrder;
