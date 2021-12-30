import React, { useState } from 'react';
import axios from 'axios';
// import './Autorization.css';

const backend_url = 'http://localhost:3001/api/v1';

const Autorization = ( { changeLogin } ) => {

    let [message, setMessage] = useState("");

    function analyze(data){
        if (typeof data.message == 'undefined'){
            sessionStorage.setItem('login_name', `${data.admin}`)
            return true
        }
        else{
            setMessage(data.message);
            return false;
        } 
    }

    function autorization(event){
        event.preventDefault();
        let fields = event.target;
        let params = {name: fields.login.value, password: fields.password.value};
        axios.post(backend_url + '/autorize', params)
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
