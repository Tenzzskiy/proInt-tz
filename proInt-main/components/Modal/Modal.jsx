import styles from './Modal.module.scss'



const Modal = ({active, setActive, size, totalPrice, buttonCount,activeCheckBox}) => {
    let prices = [];

    activeCheckBox.forEach(elem =>{
        prices.push(+elem.price);
    })
    let result =  prices.reduce(function( sum ,current){

console.log(Number(typeof(totalPrice)))
      return (
          Number(sum)+current
      )


    },totalPrice.split(' ').join(''));
    const CheckBoxes = activeCheckBox.map(elem => {


        return(

                <div className={styles.checkbox_flex}>
                <div className={styles.checkbox_order}>Разработка макета #{elem.id}  </div>
                        <div className={styles.checkbox_price}>{elem.price} ₽</div>
                </div>



        )
    })
    return (
        <>
            <div className={
                active ? `${styles.modal_active} ${styles.modal}` : styles.modal
            } onClick={() => {
                setActive(false)
            }}>
                <div className={
                    active ? `${styles.modal_content} ${styles.modal_active_content}` : styles.modal_content
                } onClick={e => e.stopPropagation()}>
                    <div className={styles.header}>
                        <div> Ваша заявка</div>
                        <div className={styles.header_img}><img src='/close_button.svg' alt=""
                                                                onClick={() => {
                                                                    setActive(false)
                                                                }}
                        /></div>
                    </div>
                    <div className={styles.orderInfo}>
                        <div className={styles.photoZoneInfo}>
                            <div className={styles.title}>Фотобудка с ширмой< /div>
                            <div className={styles.size}>Размер: <span>{size} </span></div>
                        </div>
                        <div className={styles.photoZone_Price}>
                            <div>
                                <button>
                                    {buttonCount}
                                </button>
                            </div>
                            <div className={styles.price}> {totalPrice} ₽</div>
                        </div>
                         {CheckBoxes}
                    </div>
                    <div className={styles.result}>
                    <div className={styles.text}>Итого: </div>
                    <div className={styles.number}> {result} ₽</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;