import React, { Fragment, useState, useEffect } from "react";
import styles from "../Styles/ProductPage.module.scss";
import Navbar from "../UI/Navbar";

//import redux store and dispatch
import { useSelector, useDispatch } from "react-redux";

//import animation library
import { motion } from "framer-motion";

import ProductCard from "../UI/ProductCard";
import Notification from "../UI/Notification";
import Loading from "../UI/Loading";

const Smartphones = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [smartphones, setSmartphones] = useState([]);
  const showNotification = useSelector((state) => state.cart.showNotification);

  const fetchDataHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/products/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);
      setSmartphones(
        data.filter((smartphone) => {
          return smartphone.category === "smartphone";
        })
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <Fragment>
      {isLoading && <Loading />}
      <Navbar />
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.productPage}
      >
        {smartphones.map((smartphone) => (
          <ProductCard
            key={smartphone._id}
            name={smartphone.name}
            price={smartphone.price}
            image={smartphone.image}
          />
        ))}
      </motion.div>
      {showNotification && (
        <Notification message="You have successfully added your product to cart" />
      )}
    </Fragment>
  );
};

export default Smartphones;
