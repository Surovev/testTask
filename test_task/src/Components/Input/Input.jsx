import { useState } from 'react';

export const Input = ({ currency, value, callBack, handleChange }) => {

    const pattern = new RegExp(/^[0-9]*(?:\.[0-9]*)?$/g);

    const [errorClass, setErrorClass] = useState('');

    const handleValidate = (e) => {

        if (pattern.test(e.target.value)) {
            setErrorClass('')
            handleChange(e, callBack);
        } else {

            setErrorClass('error')

        }
    }

    return (
        <div className="input error">
            <p className="input__title">{currency}</p>
            <input className="input__element" value={value} placeholder={'enter amount'} onInput={(event) => { handleValidate(event) }}></input>
            <span className={`input__error ${errorClass}`}>only numbers</span>
        </div>
    )
}

export default Input
