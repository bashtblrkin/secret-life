import React, {FC, forwardRef, InputHTMLAttributes} from 'react';
import cn from "classnames";

import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({...props}, ref) => {

    const {className} = props

    return (
        <input className={cn(styles.input, className)} {...props} ref={ref}/>
    );
});

export default Input;