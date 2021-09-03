import React from "react";
import styles from "../Styles/Navbar.module.scss";

import { Link } from "react-router-dom";


//import for redux
import {useSelector} from 'react-redux';
const Navbar = () => {

  const totalItems=useSelector(state=>state.cart.totalProducts);
  const totalFav=useSelector(state=>state.favourite.totalFav);

  return (
    <nav>
      <div className={styles.logo}>
        <h1>E-commerce platform</h1>
      </div>
      <div className={styles.categories}>
        <h1>Categories</h1>
        <div className={styles.dropdown}>
          <Link id={styles.links} to="/products/laptops"><h1>Laptops</h1></Link>
          <Link id={styles.links} to="/products/smartphones"><h1>Smartphones</h1></Link>
          <Link id={styles.links} to="/products/accesories"><h1>Accesories</h1></Link>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.Btn}>
          <p>{totalFav}</p>
          <i class="far fa-heart"></i>
        </div>
        <div className={styles.Btn}>
          <p>{totalItems}</p>
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div className={styles.myAccount}>
          <Link id={styles.myAccountTxt}>
            <h1>My account</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
