import React from 'react';

import eyes from "../assets/img/eyes.jpg";
import Container from "../components/Container/Container";

import styles from './PsyhologistsPage.module.scss'
import Button from "../components/Button/Button";
import BorderedCard from "../components/BorderedCard/BorderedCard";

const PsyhologistsPage = () => {

    return (
        <>
            <section className={styles.mainSection}>
                <img className={styles.mainPhoto} src={eyes} alt="Рукопожатие"/>
                <Container>
                    <h1>
                        Платформа для практикующих <br/> психологов</h1>
                    <p className={styles.infoText}>Удаленная работа для психологов.</p>
                    <Button title={'Сотрудничать'} className={styles.btnMain}/>
                </Container>
            </section>
            <section className={styles.service}>
                <Container>
                    <h2>Вы занимаетесь психотерапией, мы делаем всё остальное</h2>
                    <div className={styles.row}>
                        <div className={styles.simpleCard}>
                            <p className={styles.simpleCardText}>Не думаете о том, где брать клиентов</p>
                        </div>
                        <div className={styles.simpleCard}>
                            <p className={styles.simpleCardText}>Берём рутину на себя</p>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.simpleCard}>
                            <p className={styles.simpleCardText}>Консультируете в любой точке света</p>
                        </div>
                        <div className={styles.simpleCard}>
                            <p className={styles.simpleCardText}>Развиваем ваш личный бренд</p>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.simpleCard}>
                            <p className={styles.simpleCardText}>Работаете, когда удобно</p>
                        </div>
                        <div className={styles.simpleCard}>
                            <p className={styles.simpleCardText}>Не выгораете с нашей поддержкой</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={styles.expectations}>
                <Container>
                    <h3>Что ждём от специалистов, <br/>
                        которые хотят с нами работать</h3>
                    <div className={styles.row}>
                        <BorderedCard style={{width: '295px'}}>
                            <p className={styles.borderedCardTitle}>Опыт консультирования от 3 лет</p>
                            <p className={styles.borderedCardSubtitle}>Ещё мы попросим потвердить, что вы проходите личную терапию и супервизии.</p>
                        </BorderedCard>
                        <BorderedCard style={{width: '295px'}}>
                            <p className={styles.borderedCardTitle}>Образование психолога или психотерапевта</p>
                            <p className={styles.borderedCardSubtitle}>Высшее или программа профессиональной переподготовки.</p>
                        </BorderedCard>
                        <BorderedCard style={{width: '295px'}}>
                            <p className={styles.borderedCardTitle}>Сертификация</p>
                            <p className={styles.borderedCardSubtitle}>Обучение в психотерапевтических подходах и специализациях.</p>
                        </BorderedCard>
                        <BorderedCard style={{width: '295px'}}>
                            <p className={styles.borderedCardTitle}>Самозанятость</p>
                            <p className={styles.borderedCardSubtitle}>Если у вас пока нет статуса самозанятого — мы поможем его оформить.</p>
                        </BorderedCard>
                    </div>
                    <div className={styles.fullCenter}>
                        <Button title={'Сотрудничать'} className={styles.btnMain}/>
                    </div>
                </Container>
            </section>
        </>
    );

};

export default PsyhologistsPage;