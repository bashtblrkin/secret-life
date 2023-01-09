import React, {FC} from 'react';

import styles from './RegisterForm.module.scss'
import Input from "../../Control/Input/Input";
import Button from "../../Button/Button";
import {NavLink} from "react-router-dom";

interface RegisterFormProps {
    onClose: () => void
}

const RegisterForm: FC<RegisterFormProps> = ({onClose}) => {
    return (
        <form className={styles.form}>
            <p className={styles.title}>Регистрация нового пользователя</p>
            <Input placeholder={'Введите телефон'}/>
            <Input placeholder={'Введите своё имя'}/>
            <Input type='password' placeholder={'Введите пароль'}/>
            <Input type='password' placeholder={'Повторите пароль'}/>
            <Button title={'Зарегистрироваться'} type={"submit"} className={styles.btn}/>
            <p onClick={onClose}><NavLink to={'/psychologists'} className={styles.subtitle}>Зарегистрироваться как специалист</NavLink></p>
        </form>
    );
};

export default RegisterForm;