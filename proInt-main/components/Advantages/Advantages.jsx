import React from "react";
import styles from './Advantages.module.scss'
import {Card} from "../Card/Card";
export const Advantages = () =>{
    const [AdvantageItem] = React.useState([
        {img: '/icon_1.svg', text: 'Безлимитная \n печать фото',id:0},
        {img: '/icon_2.svg', text: 'Фотореквизит \n в наличии',id:1},
        {img: '/icon_3.svg', text: 'Фотоотчет в \n электронном виде',id:2},
        {img: '/icon_4.svg', text: `Цены \n ниже рынка`,id:3}
   ] )

    const Cards = AdvantageItem.map((item) =>{
        return (
                <Card  key={item.id}  img={item.img} text={item.text}   />
        )
    })
    return(
        <>  <div className={styles.advantages}>

            <div className={styles.title}>Фото</div>
            <div className={styles.redText}>на праздник</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur <a href="#">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>

            <div className={styles.advantegesList}>

                {Cards}
            </div>
        </div>
        </>
    )
}


