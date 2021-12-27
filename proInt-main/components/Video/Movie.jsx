import React from "react";
import styles from './Movie.module.scss'




export const Movie = () =>{


    return(
        <>
            <div className={styles.container}>
            <div className={styles.container_logo}>
                <img src='/logo.svg' alt=""/>
            </div>
                <div className={styles.container_movie}>

                <div className={styles.container_movie_youtube}>
                    <img  className={styles.surround} src='/cyrcles.svg' alt=""/>
                    <img className={styles.round} src="/round.svg" alt=""/>
                    <iframe
                        width="100%"
                        height='182px'
                        src="https://www.youtube.com/watch?v=yO3rYIYc7d4"
                        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}
                         html,body{height:100%}
                         img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                         span{height:70px;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black; background:white; width:70px; border-radius:50%;
                         display:flex; justify-content:center; align-items:center }
                         div{width:100%;height:70px; background:white; border-radius:50%; z-index:1; height:70px; display:flex; justify-content:center; align-items:center}
                         </style>
                         <a href=https://www.youtube.com/embed/yO3rYIYc7d4?autoplay=1>
                          <img src=/marvel.png alt='Demo video'>
                      <div><span  ><img src=/freePlay.svg alt='Demo video'></span></div>
                          </a>"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        title="marvel video">

                    </iframe>


                </div>
                </div>


            </div>
        </>
    )
}
