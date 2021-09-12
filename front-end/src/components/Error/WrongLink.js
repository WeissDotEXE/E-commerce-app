import React from 'react';
import styles from '../Styles/WrongLink.module.scss';

import wrongPage from '../Media/wrongPage.svg';

import { Link } from 'react-router-dom';
import Button from '../UI/Button';
const WrongLink=()=>{
    return(
        <div className={styles.wrongLink}>
            <img src={wrongPage}/>
            <h1>Sorry! We couldn't find that!!</h1>
            <Link to="/"><Button id={styles.redirectBtn}>Go to main page</Button></Link>
        </div>
    )
}

export default WrongLink;
