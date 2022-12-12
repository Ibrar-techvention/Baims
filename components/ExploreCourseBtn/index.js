import Image from 'next/image';
import React from 'react';
import style from './exploreCourseBtn.module.css';
import { useTranslation } from "next-i18next";

const ExploreCourseBtn = ({ background, color }) => {
    const { t: translation } = useTranslation();

    return (
        <div className={style.ExploreCourseBtnContainer} style={{ background: `${background || 'rgb(69, 170, 242)'}`, color: `${color || 'white'}` }}>
            <span>{translation("exBtn")}</span>
            {
                background === 'white' ?
                    <Image src='/img/right-arrow-black.png' alt='' height={20} width={20} />
                    :
                    <Image src='/img/right-arrow-icon.png' alt='' height={20} width={20} />
            }

        </div>
    )
}

export default ExploreCourseBtn;