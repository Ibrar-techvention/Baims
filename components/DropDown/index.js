/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import style from './dropDown.module.css';

const DropDown = ({ selectbtn, languages, setSelected, justifybtn, component, ...rest }) => {
    const [select, setSelect] = React.useState(false);
    const callback =(data) =>{
        setSelected(data); 
        setSelect(false); 
    }

    return (
        <>
            <div className={style.languageDropdownContainer} tabIndex='0' onBlur={() => setSelect(false)}>

                <div onClick={() => setSelect(!select)}>
                    {component}
                </div>


                {select &&
                    <ul className={style.languageOptions} {...rest} >
                        {languages.map((data, indx) => (
                            <li className={style.li} key={indx} onClick={() =>callback(data.value)}>{data.label}</li>
                        ))}
                    </ul>
                }

            </div>
        </>
    )
}

export default DropDown;