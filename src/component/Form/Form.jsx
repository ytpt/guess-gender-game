import React, {useState} from "react";
import * as axios from "axios";
import s from './Form.module.css';
import SubmitBtn from "../SubmitBtn";
import Output from "../Output/Output";
import ErrorMessage from "../Error/ErrorMessage";

const Form = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState(false);

    const getGender = () => {
        const firstName = name;
        const serverUrl = 'https://api.genderize.io';
        const gender = `${serverUrl}?name=${firstName}`;

        return axios.get(gender)
            .then(data => {
                setName(data.data.name);
                setGender(data.data.gender)
            })
    }

    const clearField = () => {
        setName('');
        setGender('');
    }

    function onChangeHandler(e) {
        let name = e.target.value;
        name = name.replace(/[^A-Za-z]/ig, '')
        setName(name);

        if (name.length <= 2 && name.length != 0) {
            setError(true);
        } else {
            setError(false);
        }
        setName(name);
    }

    return (
        <form>
            <input
                type='text'
                placeholder={'Write down the name'}
                onChange={onChangeHandler}
                value={name}
            />
            {error
                ? <button disabled className={s.disabled}>Send</button>
                : <SubmitBtn getGender={getGender} name={name} />}
            <button type='button' onClick={clearField}>
                Clear
            </button>
            {error && <ErrorMessage message={'Name should be longer.'} />}
            {name && <Output name={name} gender={gender}/>}
        </form>
    )
}

export default Form;