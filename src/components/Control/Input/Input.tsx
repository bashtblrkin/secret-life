import React, {FC, InputHTMLAttributes} from 'react';
import cn from "classnames";

import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

const Input: FC<InputProps> = ({...props}) => {

    const {className} = props

    return (
        <input className={cn(styles.input, className)} {...props}/>
    );
};

export default Input;