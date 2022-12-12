/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from './CarouselElement.module.css';

const CarouselElement = ({data}) => {
    return (
        <div className={style.CarouselElementContainer} style={{
            background: 'url("/img/carousel-img.jpeg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className={style.Upper}>
                <div className={style.heading}>
                    <span dir='rtl'>{data.name}</span>
                </div>
                <div className={style.subHeading} >
                    <div dir='rtl'>
                        {data.code}
                    </div>
                    
                </div>
            </div>
            <div  style={{fontWeight:'bold',padding:'0.5rem 0rem 0rem 0rem '}}>
                        {data.instructor.name}
                    </div>
            <div className={style.lower}>
                <div className={style.Level}>Level One</div>
                <div className={style.rating}>
                    <div className={style.star}>
                        <img src='/img/rating-star-black.svg' alt='' width='10px' />
                    </div>
                    <div className={style.ratingCount}>3.6/5</div>
                    <div className={style.course}>. 2 courses</div>
                </div>
            </div>
        </div>
    )
}

export default CarouselElement