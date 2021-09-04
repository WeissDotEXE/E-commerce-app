import React from "react";
import styles from "../Styles/Loading.module.scss";
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => {
  return (
    <div className={styles.loading}>
        <h1>Loading...</h1>
        <ReactLoading type={'bars'} color={'#000'} height={'20%'} width={'20%'} />
    </div>
  );
};

export default Loading;
