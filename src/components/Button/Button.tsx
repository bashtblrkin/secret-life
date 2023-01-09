import React, {ButtonHTMLAttributes, FC} from 'react';
import styles from './Button.module.scss'
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    title: string
}

const Button: FC<ButtonProps> = ({title,...props}) => {
    const {className} = props

    return (
        <button {...props} className={cn(styles.btn, className)}>
            {title}
        </button>
    );
};

export default Button;