import React, {FC} from 'react';

import styles from './Header.module.scss'
import Container from "../Container/Container";
import logo from '../../assets/img/logo.png'
import {NavLink, useLocation} from "react-router-dom";
import Button from "../Button/Button";

interface HeaderProps {
    onSignInClick: () => void
}

const Header: FC<HeaderProps> = ({onSignInClick}) => {

    const {pathname} = useLocation()

    return (
        <Container>
            <header className={styles.header}>
                <NavLink to='/'><img src={logo} alt="Логотип"/></NavLink>
                <div className={styles.navigate}>
                    {pathname === '/' && <NavLink to="/psychologists" className={styles.link}>Психологам</NavLink>}
                    {pathname === '/psychologists' && <NavLink to="/" className={styles.link}>Посетителям</NavLink>}
                    <p className={styles.text}>Регистрация</p>
                    <Button title={'Войти'} className={styles.btn} onClick={onSignInClick}/>
                </div>
            </header>
        </Container>
    );
};

export default Header;