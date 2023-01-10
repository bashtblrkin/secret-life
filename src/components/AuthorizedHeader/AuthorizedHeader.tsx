import React, {useState} from 'react';

import logo from '../../assets/img/logo.png'
import avatar from '../../assets/img/avatar.png'
import arrowMin from '../../assets/img/arrow-min.png'
import Container from "../Container/Container";
import styles from "./AuthorizedHeader.module.scss";
import {NavLink} from "react-router-dom";
import Button from "../Button/Button";
import cn from "classnames";
import {useAuth} from "../../hooks/useAuth";

const AuthorizedHeader = () => {

    const [isOpen, setIsOpen] = useState(false)

    const {logout} = useAuth()

    return (
        <Container>
            <header className={styles.header}>
                <NavLink to='/search'><img src={logo} alt="Логотип"/></NavLink>
                <div className={styles.navigate}>
                    <img src={avatar} alt="Аватар"/>
                    <p>Иван</p>
                    <div className={styles.dropDownWrapper}>
                        <img className={styles.openner} src={arrowMin} alt="" onClick={() => {setIsOpen(prev => !prev)}}/>
                        <div className={cn(styles.dropDown, {[styles.open]: isOpen})}>
                            <p onClick={logout}>Выйти</p>
                        </div>
                    </div>
                </div>
            </header>
        </Container>
    );
};

export default AuthorizedHeader;