import React, {useState} from "react";
import styles from './../styles/index.module.scss'
import {Movie} from "../components/Video/Movie";
import {Advantages} from "../components/Advantages/Advantages";
import {Slider} from "../components/Slider/Slider";
import Modal from "../components/Modal/Modal";



export const  Index = () => {
    const [photoZoneId,setPhotoZoneId] = React.useState(1);
    const [modalActive, setModalActive] = useState(false);
    const [size] = useState('2м x 1.5м x 2 м')
    const [totalPrice,setTotalPrice] = useState('17 000');
    const [activeButtonStyle,setActiveButtonStyle] = useState(styles.next_card)


      const setButtonActive = () => {
         setActiveButtonStyle(styles.next_card_active)
            setTimeout(( ) =>{setActiveButtonStyle(styles.next_card)},50);

     }

    const [buttonCount,setButtonCount] = useState(
        null
    )


    const [activeCheckBox,setActiveCheckBox] = useState(
        [

        ]
    )

    const deleteCheckbox = (id) =>{
        setActiveCheckBox(activeCheckBox.filter(elem => elem.id !== id))
    }



    const changeTotalPrice = (number) =>{
        switch(number){
            case 1: setTotalPrice('17 000'); break;
            case 2: setTotalPrice('18 000'); break;
            case 3:setTotalPrice('19 000'); break;
            case 4:setTotalPrice('20 000'); break;
            case 5:setTotalPrice('21 000'); break;
            case 6:setTotalPrice('22 000'); break;
        }
    }
    const showElse = () =>{
        if (photoZoneId < 10) {
            setPhotoZoneId(photoZoneId+1)
        }
    }

    const makeButtonCount = () =>{
        if (totalPrice === '17 000'){
            setButtonCount('1 час')
        } else  if (totalPrice === '18 000'){
            setButtonCount('2 часа')
        } else  if (totalPrice === '19 000'){
            setButtonCount('3 часа')
        } else  if (totalPrice === '20 000'){
            setButtonCount('5 часов')
        } else  if (totalPrice === '21 000'){
            setButtonCount('2 дн')
        } else  if (totalPrice === '22 000'){
            setButtonCount('3 дн')
        }
    }


    return (
        <>
            <div className={styles.body}>

                <div className={styles.body_container}>
                    <Movie />
                    <Advantages />
                    <span className={styles.photo_zones}>Фотобудки </span>
                    <Slider photoZoneId={photoZoneId}
                            active={modalActive}
                            setActive={setModalActive}
                            size={size}
                            totalPrice={totalPrice}
                            changeTotalPrice={changeTotalPrice}
                            makeButtonCount={makeButtonCount}
                            activeCheckBox={activeCheckBox}
                            deleteCheckbox={deleteCheckbox}

                    />
                    <div className={activeButtonStyle} onClick={() => {
                        showElse()
                        setButtonActive()
                    }}> <button > Показать еще</button> </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive} size={size} totalPrice={totalPrice}
                       buttonCount={buttonCount} activeCheckBox={activeCheckBox}
                />
            </div>



        </>
    )




}
export default Index;
