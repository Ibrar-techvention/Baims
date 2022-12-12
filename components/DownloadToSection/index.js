/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import style from './downloadToSection.module.css';
import { useTranslation } from "next-i18next";

const DownloadToSection = () => {
    const { t: translation } = useTranslation();

    return (
        <div className={style.DownloadToSectionContainer}>
            <div className={style.UpperSection}>
                <div className={style.heading}>{translation("anyDevice")}</div>
                <div className={style.description}>
                    <span>
                    {translation("deviceText")}

                    </span>
                </div>
            </div>
            <div className={style.mainImg}>
                <img src='./img/3x.png' alt='' width='100%' />
            </div>
            <div className={style.downloadBtn}>
                <img src="/img/app-store-download.svg" alt='' />
                <img src="/img/play-store-download.svg" alt='' />
            </div>
        </div>
    )
}

export default DownloadToSection;