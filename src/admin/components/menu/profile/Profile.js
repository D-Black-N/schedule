import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ADMIN_URL = 'http://localhost:3001/api/v1/admin';

const Profile = () => {
    
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const divMessage = document.querySelector(".message")

    useEffect(() => {
        axios.get(ADMIN_URL + `/${sessionStorage.getItem('login_id')}/edit`, 
                    {admin: sessionStorage.getItem('login_id')}).then(res => setName(res.data.name));
    }, []);

    const updateProfile = (event) => {
        event.preventDefault();
        const fields = event.target
        const admin = { name: fields.login.value };
        const admin_id = sessionStorage.getItem('login_id');
        if (fields.new_password.value.length !== 0){
            admin.password = fields.new_password.value;
            if (fields.new_password_confirmation.length !== 0)
                admin.password_confirmation = fields.new_password_confirmation.value;
            else {
                setMessage("Не заполнено поле подтверждения пароля!");
                fields.new_password_confirmation.focus();
            };
        };
        axios.patch(ADMIN_URL + `/${admin_id}`, {admin: admin}).then(res => console.log(res.data));
        fields.new_password.value = "";
        fields.new_password_confirmation.value = "";
        divMessage.style.color = 'green';
        setMessage('Профиль обновлен успешно!');
        setTimeout(() => {
            setMessage("");
            divMessage.style.color = 'red';
        }, 5000);
    };
    
    return (
        <div className='profile'>
            <h3>Профиль администратора</h3>
            <form className='profile-form' onSubmit={updateProfile}>
                <label>Логин</label>
                <input type='text' id='login' defaultValue={name} />
                <label>Новый пароль</label>
                <input type='password' id='new_password' />
                <label>Подтвердите пароль</label>
                <input type='password' id='new_password_confirmation' />
                <input type='submit' id='update-profile' value='Обновить' />
            </form>
            <div className='message'>{message}</div>
        </div>
    )
};

export default Profile;
