import React, { useState } from 'react';
import get from 'lodash/get'
import style from './dropDown.module.css';

const DropDownn = ({ selectbtn, languages, setSelected, justifybtn, component,dataKey, ...rest }) => {
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
                            <li className={style.li} key={indx} onClick={() =>callback(data)}>{get(data, dataKey)}</li>
                        ))}
                    </ul>
                }

            </div>
        </>
    )
}

export default DropDownn;


DropDownn.defaultProps = {
    DropDownn: 'category.name'
}