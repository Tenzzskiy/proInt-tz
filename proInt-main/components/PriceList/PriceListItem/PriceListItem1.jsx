import React, {useRef, useState} from "react";
import styles from './PriceListItem.module.scss'


export const PriceListItem = (props) => {
    const checked = useRef()
    const play = () =>{
        console.log(checked.current.checked)
        console.log(props.activeCheckBox)
        console.log(props.id)
    }

    return (
        <>
            <div className={styles.PriceListItem}>
                <img src="/firstSlide.png" alt=""/>
                <div className={styles.PriceListItem__info}>
                    <div className={styles.PriceListItem__title}>
                        Разработка макета #{props.id}
                    </div>
                    <div className={styles.PriceListItem__priceInfo}>
                        <div className={styles.PriceListItem__priceInfo_price}>
                            {props.price}
                        </div>
                        <input onClick={() => {
                            if (!checked.current.checked) {
                                props.deleteCheckBox(props.id)

                            } else {
                                props.activeCheckBox.push({id: props.id, price: props.price})
                            }
                            play();
                        }
                        }
                               ref={checked}
                               className={styles.custom_checkbox}
                               name="checkbox"
                               type="checkbox"

                        />
                        <label htmlFor="checkbox"
                               className={styles.checkbox_label}

                        >

                        </label>

                    </div>
                </div>
            </div>
        </>
    )
}
