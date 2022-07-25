import React from "react";

const SubmitBtn = ({getGender}) => {

    return (
        <button type='button' onClick={getGender}>
            Send
        </button>
    )
}

export default SubmitBtn;
