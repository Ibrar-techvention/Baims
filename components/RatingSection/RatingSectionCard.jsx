import React from 'react';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import style from './ratingSectionCard.module.css';
import { useTranslation } from "next-i18next";

const RatingSectionCard = () => {
    const { t: translation } = useTranslation();

    return (
        <div className={style.RatingSectionCardContainer}>
            <div className={style.left}>
                <div className={style.profile}>
                    <Image src='/img/profile.png' alt='' height={50} width={50} />
                </div>
                <div className={style.ratings}>
                    <div className={style.name}>{translation("anyMan")}</div>
                    <div className={style.stars}>
                        <StarRatings
                            rating={5}
                            starRatedColor="#FFAA04"
                            starDimension='20px'
                            starSpacing='1px'
                            numberOfStars={5}
                            name='rating'
                        />
                        <span> 5</span>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.arrow}>
                    <Image src='/img/right-arrow-icon.png' alt='' height={20} width={20} />
                </div>
            </div>
        </div>
    )
}

export default RatingSectionCard