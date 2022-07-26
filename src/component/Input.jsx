import React, {useState} from "react";
import SubmitBtn from "./SubmitBtn";
import s from "../App.module.css";
import Output from "./Output";
import * as axios from "axios";

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
                setGender(data.data.gender);
            })
    }

    const clearField = () => {
        setName('');
        setGender('');
    }

    return (
        <div className={s.container}>
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
            {(name) ? <Output name={name} gender={gender}/> : null}
        </div>
    )
}

export default Input;