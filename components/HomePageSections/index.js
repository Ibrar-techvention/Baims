/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ExploreCourseBtn from '../ExploreCourseBtn';
import style from './videoSection.module.css';

const VideoSection = ({ title, description, mainImg, secondImg, video, mainImgWidth, mainImgHeight, btn,marginRight }) => {
   
    return (
        <div className={style.VideoSectionContainer}>
            <div className={style.leftSection}>
                <div className={style.glassesImg}>
                    <Image src={secondImg} alt='' width={85} height={85} />
                </div>
                <div className={style.heading}>{title}</div>
                <div className={style.body}>{description}</div>
                <Link href="./home">
                <div>
                    {
                        btn ?
                            <ExploreCourseBtn
                                background='white'
                                color='black'
                            /> :
                            <ExploreCourseBtn />
                    }

                </div>
                </Link>
            </div>
            <div className={style.RightSection}>
                {video ?
                    <div style={{ maxHeight: '360px', maxWidth: '640px' }}>
                        <video src={mainImg} preload="auto" autoPlay muted loop playsInline="" webkit-playsinline="" x5-playsinline="" style={{ maxWidth: "100%", maxHeight: '100%' }}></video>
                    </div> :
                    // eslint-disable-next-line @next/next/no-img-element
            
                    <img className={style.imagess} src={mainImg} alt=''  height={`${mainImgHeight}`}  style={{marginRight:`${marginRight}`}}/>
                }
            </div>
        </div >
    )
}

export default VideoSection;