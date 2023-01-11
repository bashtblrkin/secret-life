import React from 'react';
import Header from "../components/Header/Header";

import hands from '../assets/img/hands.jpg'
import Container from "../components/Container/Container";
import ProblemCard from "../components/ProblemCard/ProblemCard";
import self from '../assets/img/self-esteem.png'
import emotion from '../assets/img/emotion.png'
import depressed from '../assets/img/depressed.png'
import motivation from '../assets/img/motivation.png'
import love from '../assets/img/love.png'
import anxiety from '../assets/img/anxiety.png'
import BorderedCard from "../components/BorderedCard/BorderedCard";
import Button from "../components/Button/Button";

import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <>
            <section className={styles.mainSection}>
                <img className={styles.mainPhoto} src={hands} alt="Рукопожатие"/>
                <Container>
                    <h1>Консультации с психологом <br/> онлайн</h1>
                    <p className={styles.infoText}>Мы подберем профессионального <br/>
                        специалиста, который работает <br/>
                        именно с вашим запросом.</p>
                </Container>
            </section>
            <section className={styles.problemsSection}>
                <Container>
                    <h2>Поможем решить проблемы:</h2>
                    <div className={styles.row}>
                        <ProblemCard title={'Самооценка'} img={self}/>
                        <ProblemCard title={'Эмоциональное выгорание'} img={emotion}/>
                        <ProblemCard title={'Депрессия'} img={depressed}/>
                    </div>
                    <div className={styles.row}>
                        <ProblemCard title={'Мотивация'} img={motivation}/>
                        <ProblemCard title={'Отношения'} img={love}/>
                        <ProblemCard title={'Фобии и тревоги'} img={anxiety}/>
                    </div>
                    <div className={styles.fullCenter}>
                        <Button title={'Найти психолога'} className={styles.greenBtn}/>
                    </div>
                </Container>
            </section>
            <section className={styles.reviewsSection}>
                <Container>
                    <h3>Отзывы о нас</h3>
                    <BorderedCard style={{
                        width: '1132px'
                    }}>
                        <p className={styles.borderCardHeader}>Елена</p>
                        <span className={styles.borderCardSubtitle}>Специалист по интернет-рекламе</span>
                        <p className={styles.borderCardInfo}>Полтора года назад я увидела рекламу сервиса SecretLife,
                            и он показался мне интересным. У меня было представление,
                            что успех психотерапии зависит не только от правильного специалиста,
                            но и от меня тоже — важно, насколько я намерена прикладывать усилия
                            и разбираться в себе. Поэтому я начала работать со специалистом из SecretLife,
                            как только поняла, что готова.</p>
                    </BorderedCard>
                </Container>
            </section>
        </>
    );
};

export default HomePage;