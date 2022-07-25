import React from "react";
import s from '../App.module.css';

const Output = ({name, gender}) => {
    return (
        <div className={s.container}>
            {gender === 'male'
                ?  <h2>{name} is <span className={s.male}>{gender}</span></h2>
                : <h2>{name} is <span className={s.female}>{gender}</span></h2>}
        </div>
    )
}

export default Output;