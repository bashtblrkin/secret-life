import React from 'react';
import logo from '../../assets/img/footer-logo.png'
import styles from './Footer.module.scss'
import Container from "../Container/Container";

const Footer = () => {

    return (
        <div className={styles.footer}>
            <Container>
                    <img src={logo} alt="Логотип"/>
            </Container>
        </div>
    );
};

export default Footer;