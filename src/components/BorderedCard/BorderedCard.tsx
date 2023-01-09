import React, {CSSProperties, FC, PropsWithChildren} from 'react';

import styles from './BorderedCard.module.scss'

interface BorderedCardProps {
    style: CSSProperties
}

const BorderedCard: FC<PropsWithChildren<BorderedCardProps>> = ({style, children}) => {
    return (
        <div  className={styles.card} style={style}>
            {children}
        </div>
    );
};

export default BorderedCard;