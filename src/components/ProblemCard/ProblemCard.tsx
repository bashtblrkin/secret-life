import React, {FC} from 'react';
import styles from './ProblemCard.module.scss'

interface ProblemCardProps {
    img: string
    title: string
}

const ProblemCard: FC<ProblemCardProps> = ({img, title}) => {
    return (
        <div className={styles.card}>
            <img src={img} alt=""/>
            <p className={styles.text}>{title}</p>
        </div>
    );
};

export default ProblemCard;