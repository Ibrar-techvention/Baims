import React from 'react';
import style from './counterSection.module.css';
import Element from './Element';
import { useTranslation } from "next-i18next";

const CounterSection = () => {
    const { t: translation } = useTranslation();

    return (
        <div dir='ltr' className={style.CounterSectionContainer}>
            <Element
                count='6.98k'
                title={translation("coursesSub")}
            />
            <Element
                count='368'
                title={translation("teacher")}
            />
            <Element
                count='223.09K'
                title={translation("student")}
            />
            <Element
                count='12.88M'
                title={translation("lecture")}
            />
        </div>
    )
}

export default CounterSection