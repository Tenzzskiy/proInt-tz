import React, {useRef, useState} from "react";
import styles from './PriceList.module.scss'
import {PriceListItem} from "./PriceListItem/PriceListItem1";


export const PriceList = ({photoZoneId,size,activeCheckBox,deleteCheckbox}) => {

    const [priceListItems] = useState(
        [
            {id:1,price:2500},
            {id:2,price:3000},
            {id:3,price:3500},
            {id:4,price:4000},
            {id:5,price:4500},

        ]

    )


    const PriceListItems = priceListItems.map((elem) =>  {

            return(
                <PriceListItem id={elem.id} price={elem.price} key={elem.id}
                                        check={elem.check} activeCheckBox={activeCheckBox} deleteCheckBox={deleteCheckbox}
                />
            )

        }
    )

    const checkbox = React.useRef(null)

    return (
        <>
            <div className={styles.priceList}>
                <div className={styles.priceList__Info}>
                    <h3 className={styles.priceList__title}>Фотобудка с ширмой #{photoZoneId}</h3>
                    <div className={styles.priceList__sizeInfo}>Размер: <span>{size}</span></div>
                </div>
                <div className={styles.priceList__extraOptioins}>
                    <span className={styles.priceList__extraOptioins_title} onClick={priceListItems.check}>
                        Доп. опции
                    </span>
                </div>
                <div className={styles.PriceItems_overflow} ref={checkbox}>
                    {PriceListItems}
                </div>

            </div>
        </>)
}
