import React, {useMemo} from 'react';
import styles from "./CurrentPsyholog.module.scss";
import Button from "../components/Button/Button";
import cloud from "../assets/img/cloud.png";
import diplom from "../assets/img/diplom.png";
import cloudSecond from "../assets/img/cloud-two.png";
import {useParams} from "react-router-dom";
import {Psyhologs} from "../data/psyhologs";
import Container from "../components/Container/Container";

const CurrentPsyholog = () => {

    const params = useParams()

    const psyholog = useMemo(() => {
        return Psyhologs.find(psyholog => psyholog.id.toString() === params.id)
    }, [params])

    return (
        <Container>
            <div className={styles.card}>
                <div className={styles.firstBlock}>
                    <img src={psyholog?.img} alt="" className={styles.psyImg}/>
                    <Button title={'Записаться'} className={styles.btn}/>
                </div>
                <div className={styles.secondBlock}>
                    <h3>{psyholog?.name}</h3>
                    <h4>О психотерапевте</h4>
                    <div className={styles.aboutBlock}>
                        <img src={cloud} alt=""/>
                        <p>{psyholog?.benefits.first}</p>
                        <img src={diplom} alt=""/>
                        <p>{psyholog?.benefits.second}</p>
                        <img src={cloudSecond} alt=""/>
                        <p>{psyholog?.benefits.third}</p>
                    </div>
                    <p className={styles.subtitle}>
                        {psyholog?.fullInfo}
                    </p>
                    <div className={styles.titleEducation}>
                        <h3>Образование</h3>
                        <p>1 высшее,4 дополнительных</p>
                    </div>

                </div>
            </div>
        </Container>

    );
};

export default CurrentPsyholog;