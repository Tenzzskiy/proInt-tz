import styles from "./Time.module.scss"

 const Time = ({totalPrice,changeTotalPrice,setActive,makeButtonCount}) =>{

    return(
        <>
        <div className={styles.title}>
            Укажите время аренды
        </div>
            <div className={styles.buttons_wrapper}>
            <button  onClick={ () =>{ changeTotalPrice(1)}}> 1 час</button>
            <button onClick={ () =>{ changeTotalPrice(2)}}> 2 часа</button>
            <button onClick={ () =>{ changeTotalPrice(3)}}> 3 часа</button>
            <button onClick={ () =>{ changeTotalPrice(4)}}> 5 часов</button>
            <button onClick={ () =>{ changeTotalPrice(5)}}> 2 дн</button>
            <button onClick={ () =>{ changeTotalPrice(6)}}> 3 дн</button>
            </div>

            <div className={styles.final_Price}>
                <div> {totalPrice} ₽</div>
                <button onClick={() => {
                    setActive(true)

                    makeButtonCount()
                }
                }>Оставить заявку </button>

            </div>
        </>
    )
}

export default Time;