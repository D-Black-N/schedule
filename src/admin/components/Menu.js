import React from 'react';
import ReactDOM from 'react-dom';
import Subject from './menu/subjects/Subject';
import Teacher from './menu/teachers/Teacher';
import Lesson from './menu/lessons/Lesson';
import Profile from './menu/profile/Profile';

const Menu = ( { exitButtonClick } ) => {

    function openSubjects(event){
        const clicked = document.querySelector('.clicked');
        ReactDOM.render(<Subject />, document.querySelector('.content'));
        if (clicked != null )
            clicked.classList.remove('clicked');
        event.target.classList.add('clicked');
    };
    
    function openTeachers(event){
        const clicked = document.querySelector('.clicked');
        ReactDOM.render(<Teacher />, document.querySelector('.content'))
        if (clicked != null )
            clicked.classList.remove('clicked');
        event.target.classList.add('clicked');
    };

    function openLessons(event){
        const clicked = document.querySelector('.clicked');
        ReactDOM.render(<Lesson />, document.querySelector('.content'))
        if (clicked != null )
            clicked.classList.remove('clicked');
        event.target.classList.add('clicked');
    };

    function openProfile(event){
        const clicked = document.querySelector('.clicked');
        ReactDOM.render(<Profile />, document.querySelector('.content'))
        if (clicked != null )
            clicked.classList.remove('clicked');
        event.target.classList.add('clicked');
    };

    return (
        <>
            <ul>
                <li onClick={openSubjects} >Учебные предметы</li>
                <li onClick={openTeachers} >Преподаватели</li>
                <li onClick={openLessons} >Расписание</li>
                <li onClick={openProfile} >Профиль</li>
                <li onClick={exitButtonClick}>Выход</li>
            </ul>
            <div className='content'></div> 
        </>
    );
    
};

export default Menu;
