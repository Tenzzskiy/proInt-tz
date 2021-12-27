import React from "react";
import styles from './Card.module.scss'

export const Card = (props) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__img}>
                    <img
                        src={props.img}
                        alt="Card Image"
                    />
                </div>

                <div className={styles.card__text} >
                    { props.text }
                </div>
            </div>
        </>
    )
}