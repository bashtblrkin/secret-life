import React, {FC, PropsWithChildren} from 'react';
import close from '../../assets/img/close.png'
import styles from './Modal.module.scss'
import cn from "classnames";

interface ModalProps {
    isOpen: boolean
    onClose: () => void
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({isOpen, onClose, children}) => {

    return (
        <div className={cn(styles.modalWrap, {[styles.open]: isOpen})}>
            <div className={styles.content}>
                <img className={styles.close} src={close} alt="Закрыть" onClick={onClose}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;