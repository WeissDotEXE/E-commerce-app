import React, { Fragment, useState, useEffect } from "react";
import styles from "../Styles/ProductPage.module.scss";
import Navbar from "../UI/Navbar";

import { useSelector, useDispatch } from "react-redux";

//import animation library
import { motion } from "framer-motion";

import ProductCard from "../UI/ProductCard";
import Loading from "../UI/Loading";

const AccesoriesPage = () => {
  const [accessories, setAccessories] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
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
      setAccessories(
        data.filter(accesory => {
          return accesory.category === "accessory";
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
        {accessories.map((accessory) => (
          <ProductCard
            key={accessory._id}
            name={accessory.name}
            price={accessory.price}
            image={accessory.image}
          />
        ))}
      </motion.div>
    </Fragment>
  );
};

export default AccesoriesPage;
