import React from 'react';
import comment from '../../assets/img/comment.png'
import styles from './FixedCircle.module.scss'
import {useNavigate} from "react-router-dom";

const FixedCircle = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.circle} onClick={() => {navigate('/review')}}>
            <img src={comment} alt="Отзыв"/>
        </div>
    );
};

export default FixedCircle;