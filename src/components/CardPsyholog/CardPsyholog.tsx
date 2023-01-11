import React, {FC} from 'react';

import cloud from '../../assets/img/cloud.png'
import diplom from '../../assets/img/diplom.png'
import cloudSecond from '../../assets/img/cloud-two.png'

import styles from './CardPsyholog.module.scss'
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";

interface CardPsyhologProps {
    id: number
    img: string
    name: string
    subtitle: string
    benefits: {
        first: string,
        second: string,
        third: string
    },
    onClickBtn: (name: string) => void
}

const CardPsyholog: FC<CardPsyhologProps> = ({id, img, name, subtitle, benefits, onClickBtn}) => {

    const navigate = useNavigate()

    return (
        <div className={styles.card}>
            <div className={styles.firstBlock}>
                <img src={img} alt="" className={styles.psyImg}/>
                <Button title={'Записаться'} className={styles.btn} onClick={() => onClickBtn(name)}/>
            </div>
            <div className={styles.secondBlock}>
                <h3 onClick={() => {navigate(`/search/${id}`)}}>{name}</h3>
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
                <h4>О психотерапевте</h4>
                <div className={styles.aboutBlock}>
                    <img src={cloud} alt=""/>
                    <p>{benefits.first}</p>
                    <img src={diplom} alt=""/>
                    <p>{benefits.second}</p>
                    <img src={cloudSecond} alt=""/>
                    <p>{benefits.third}</p>
                </div>
            </div>
        </div>
    );
};

export default CardPsyholog;