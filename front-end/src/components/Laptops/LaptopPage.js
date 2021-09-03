import React, { useState, useEffect, Fragment } from "react";
import styles from "../Styles/ProductPage.module.scss";
import Navbar from "../UI/Navbar";

import ProductCard from "../UI/ProductCard";
const LaptopPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [laptops, setLaptops] = useState([]);

  const fetchDataHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/products/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
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
      <div className={styles.productPage}>
        {laptops.map((laptop) => (
          <ProductCard
            key={laptop._id}
            name={laptop.name}
            price={laptop.price}
            image={laptop.image}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default LaptopPage;
