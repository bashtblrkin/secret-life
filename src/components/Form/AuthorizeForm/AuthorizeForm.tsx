import React, {FC} from 'react';

import styles from './AuthorizeForm.module.scss'
import Input from "../../Control/Input/Input";
import Button from "../../Button/Button";

interface AuthorizeFormProps {
    onClickRegister: () => void
}

const AuthorizeForm: FC<AuthorizeFormProps> = ({onClickRegister}) => {

    return (
        <form className={styles.form}>
            <p className={styles.title}>Авторизация</p>
            <Input placeholder={'Введите телефон'}/>
            <Input type='password' placeholder={'Введите пароль'}/>
            <Button title={'Войти'} type={"submit"} className={styles.btn}/>
            <p className={styles.subtitle} onClick={onClickRegister}>Регистрация</p>
        </form>
    );
};

export default AuthorizeForm;