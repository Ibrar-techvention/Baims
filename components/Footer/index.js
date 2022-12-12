/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import style from './footer.module.css';
import { useTranslation } from "next-i18next";

const Footer = () => {
    const { t: translation } = useTranslation();

    return (
        <div id='HomePageFooter' dir='ltr'>
            <div className={style.FooterContainer}>
                <div className={style.container}>
                    <div className={style.BtnContainer}>
                        <div className={style.btn}>{translation("joinStudent")}</div>
                    </div>

                    <div className={style.upper}>

                        <div className={style.logoArea}>
                            <div className={style.logo}>
                                <Image src='/img/logo.svg' width={118} height={52} alt='' />
                            </div>
                            <div className={style.anywhere}>{translation("study")}</div>
                            <div className={style.downloadTo} >
                                <img src="/img/app-store-download.svg" alt='' width='150px' />
                                <img src="/img/play-store-download.svg" alt='' width='150px' />
                            </div>
                        </div>

                        <div className={style.resources}>
                            <div className={style.resourcesHeading}>{translation("resource")}</div>
                            <div className={style.resourcesItem}>{translation("about")}</div>
                            <div className={style.resourcesItem}>{translation("terms")}</div>
                        </div>

                        <div className={style.resources}>
                            <div className={style.resourcesHeading}>{translation("inTouch")}</div>
                            <div className={style.resourcesItem}>
                                {translation("contactUs")}
                            </div>
                            <div className={style.socialMediaLink}>
                                <Image src='/img/insta-icon.png' alt='' width={20} height={20} />
                                <Image src='/img/whatsapp-icon.png' alt='' width={20} height={20} />
                                <Image src='/img/twitter-icon.png' alt='' width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer