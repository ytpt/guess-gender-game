import React from "react";
import s from './Error.module.css';

const ErrorMessage = ({message}) => {
    return (
        <div className={s.errorBlock}>
            <h2>ERROR!</h2>
            <p>{message}</p>
        </div>
    )
}

export default  ErrorMessage;