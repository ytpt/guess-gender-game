import React from "react";
import s from './Error.module.css';

const ErrorMessage = (props) => {
    return (
        // <div className={s.errorBlock}>
        //     <h2>ERROR!</h2>
        //     <p>The name should be longer.</p>
        // </div>
        <div className="validation">
            <p>{props.validate}</p>
        </div>
    )
}

export default  ErrorMessage;