import React, { useState } from 'react';
import axios from 'axios';
// import './Autorization.css';

const AUTORIZATION_URL = 'http://localhost:3001/api/v1/admin';

const Autorization = ( { changeLogin } ) => {

    const [message, setMessage] = useState("");

    const analyze = (data) => {
        if (typeof data.message == 'undefined'){
            sessionStorage.setItem('login_id', `${data.admin}`)
            sessionStorage.setItem('login_name', `${data.admin}`)
            return true
        }
        else{
            setMessage(data.message);
            return false;
        } 
    }

    const autorization = (event) => {
        event.preventDefault();
        const fields = event.target;
        const params = {name: fields.login.value, password: fields.password.value};
        axios.post('http://localhost:3001/api/v1/autorize', params)
             .then(res => analyze(res.data))
             .then(bool => changeLogin(bool))
    ;}

    return (
        <>
            <div>
                <form className='autorization-form' onSubmit={autorization} >
                    <label>Логин</label>
                    <input type="text" id='login'/>
                    <label>Пароль</label>
                    <input type="password" id='password'/>
                    <input type="submit" value="Войти" id='autorize'/>
                </form>
            </div>
            <div className='bad-login'>
                {message}
            </div>
        </>
    )
}

export default Autorization;
