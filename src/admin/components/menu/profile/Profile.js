import React, { useEffect, useState } from 'react';

const Profile = () => {
    
    const [name, setName] = useState('');

    useEffect(() => {
        setName(sessionStorage.getItem('login_name'))
    }, []);

    const updateProfile = (event) => {
        event.preventDefault();
        alert('Профиль обновлен успешно!')
    };
    
    return (
        <div className='profile'>
            <h3>Профиль администратора</h3>
            <form className='profile-form' onSubmit={updateProfile}>
                <label>Логин</label>
                <input type='text' id='login' />
                <label>Новый пароль</label>
                <input type='password' id='new-password' />
                <label>Подтвердите пароль</label>
                <input type='password' id='new-password-confirmation' />
                <input type='submit' id='update-profile' value='Обновить' />
            </form>
        </div>
    )
};

export default Profile;
