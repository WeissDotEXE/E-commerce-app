import React from "react";
import styles from "../Styles/Navbar.module.scss";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <h1>E-commerce platform</h1>
      </div>
      <div className={styles.buttons}>
        <div className={styles.favouriteBtn}>
          <p>7</p>
          <i class="fas fa-shopping-cart"></i>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
