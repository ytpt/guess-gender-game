import React, {useState} from "react";
import * as axios from "axios";
import s from './Input.module.css';
import SubmitBtn from "../SubmitBtn";
import Output from "../Output/Output";
import ErrorMessage from "../Error/ErrorMessage";

const Input = () => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const getGender = () => {
        const firstName = name;
        const serverUrl = 'https://api.genderize.io';
        const gender = `${serverUrl}?name=${firstName}`;

        return axios.get(gender)
            .then(data => {
                setName(data.data.name);
                setGender(data.data.gender)
                console.log(data);
            })
    }

    const clearField = () => {
        setName('');
        setGender('');
    }

    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder={'Write down name'}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <SubmitBtn getGender={getGender} name={name} />
                <button onClick={clearField}>Clear </button>

            </form>
            {name && <Output name={name} gender={gender}/>}
        </div>
    )
}

export default Input;