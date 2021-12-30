import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Autorization from './components/Autorization';
import Menu from './components/Menu';
import './Admin.css'

const Admin = () => {
    let [login, setLogin] = useState(false);

    function exitButtonClick(){
        sessionStorage.removeItem('login_name');
        setLogin(false);
    };

    useEffect(() => {
        if (sessionStorage.getItem('login_name'))
            setLogin(true);
        else
            setLogin(false);
    }, [])

    return (
        <div>
            <Header head="Администратор" />
            <div className='main'>
                { login ? <Menu  exitButtonClick={exitButtonClick} /> : <Autorization changeLogin={setLogin} />}
            </div>
        </div>
    )
};

export default Admin;
