import React from "react";
import styles from "../Styles/Notification.module.scss";
//import animation library
import { motion } from "framer-motion";

const Notification = (props) => {
  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: -50 }}
      transition={{duration:0.7,type:'tween'}}
      className={`${styles.notification}`}
    >
      <p>{props.message}</p>
    </motion.div>
  );
};

export default Notification;
