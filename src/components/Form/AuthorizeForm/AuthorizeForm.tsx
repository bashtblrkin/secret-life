import React, {FC} from 'react';

import styles from './AuthorizeForm.module.scss'
import Input from "../../Control/Input/Input";
import Button from "../../Button/Button";
import {useForm} from "react-hook-form";
import {useAuth} from "../../../hooks/useAuth";
import {usePatternPhone} from "../../../hooks/usePatternPhone";

interface AuthorizeFormProps {
    onClickRegister: () => void
}

interface AuthInputs {
    phone: string,
    password: string
}

const AuthorizeForm: FC<AuthorizeFormProps> = ({onClickRegister}) => {

    const {register, handleSubmit, setValue} = useForm<AuthInputs>({
        defaultValues: {
            phone: '',
            password: ''
        }
    })

    const {signIn} = useAuth()
    const validatePhone = usePatternPhone()

    const onSubmit = (data: AuthInputs) => {
        signIn(data.phone, data.password)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.title}>Авторизация</p>
            <Input placeholder={'Введите телефон'} {...register('phone')} onChange={(event) => {
                setValue('phone', validatePhone(event))
            }}/>
            <Input type='password' placeholder={'Введите пароль'} {...register('password')}/>
            <Button title={'Войти'} type={"submit"} className={styles.btn}/>
            <p className={styles.subtitle} onClick={onClickRegister}>Регистрация</p>
        </form>
    );
};

export default AuthorizeForm;