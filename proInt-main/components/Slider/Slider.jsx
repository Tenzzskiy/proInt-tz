import React, {useRef, useState} from "react";
import {PriceList} from "../PriceList/PriceList";
import Time from "../Time/Time";
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Swiper, { Navigation, Pagination } from 'swiper';





export const Slider = (props) =>{

    const [imgItems] = useState(


        [
            {id:1,img:'/firstSlide.png' },
            {id:2,img:'/secondSlide.png' },
            {id:3,img:'/thirdSlide.png'},


        ]

    )
    const Items = imgItems.map((elem) =>  {

            return(
                <div
                    className='swiper-slide'
                    key={elem.id}><img src={elem.img} alt=""/> </div>
            )

        }
    )




    new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        pagination:{
            el: '.swiper-pagination',
            clickable:true,
            type: 'bullets',

        },
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'
        },

    });


    return(

        <>
            <div
                className='container'>

                <div className="swiper" >

                    <div className="swiper-wrapper">
                        {Items}
                    </div>

                    <div className='swiper-button-next ' > </div>

                        <div className='swiper-button-prev'> </div>
                    <div className='swiper-pagination'> </div>
                    <div className='prev_background'> </div>
                </div>



                <PriceList photoZoneId={props.photoZoneId} size={props.size}
                           deleteCheckbox={props.deleteCheckbox} activeCheckBox={props.activeCheckBox}
                />
                <Time active={props.active}
                      setActive={props.setActive}
                      changeTotalPrice={props.changeTotalPrice}
                      totalPrice={props.totalPrice}
                      makeButtonCount={props.makeButtonCount}
                />

            </div>
        </>
    )
}


