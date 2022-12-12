import Image from 'next/image';
import React from 'react';
import style from './counterSection.module.css';

const Element = ({ count, title }) => {
    return (
        <div className={style.element}>
            <div className={style.upperSection}>
                <div className={style.number}>{count}</div>
                <Image src='/img/plus.svg' alt='' width={36} height={36} />

            </div>
            <div className={style.bottom}>
                {title}
            </div>
        </div>
    )
}

export default Element