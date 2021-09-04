import React, { useState, useEffect, Fragment } from "react";
import styles from "../Styles/ProductPage.module.scss";
import Navbar from "../UI/Navbar";

//import redux store and dispatch
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

//import animation library
import { motion } from "framer-motion"

import ProductCard from "../UI/ProductCard";
import Notification from "../UI/Notification";
const LaptopPage = () => {
  // const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [laptops, setLaptops] = useState([]);
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
      setLaptops(data);
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
      <Navbar />
      <motion.div initial={{y:'-100vh'}} animate={{y:0}} transition={{duration:0.5}} className={styles.productPage}>
        {laptops.map((laptop) => (
          <ProductCard
            key={laptop._id}
            name={laptop.name}
            price={laptop.price}
            image={laptop.image}
          />
        ))}
      </motion.div>
      {showNotification && <Notification message="You have successfully added your product to cart"/>}
      
    </Fragment>
  );
};

export default LaptopPage;
