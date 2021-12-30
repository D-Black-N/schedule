import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SelectSubject from './SelectSubject';

const FIO_VALIDATION = /[А-Я][а-я]+ [А-Я]\.[А-Я]\./


export const TeacherForm = ( { action, cancel, subjects, createMessage, findTeacher, addTeacher, base, name, teachers } ) => {

    const input_field = document.querySelector('input#name');
    const mes = document.querySelector('.message');

    const [number, setNumber] = useState(1);

    useEffect(() => {
        document.querySelector('select').style.display = 'inline';
    }, []);

    // добавление записи о преподавателе в список
    const postTeacher = (event) => {
        event.preventDefault();
        const elements = event.target;
        const fio = elements.name.value;
        const teacher = { fio: '', lessons: []};
        mes.style.color = 'red';
        if (FIO_VALIDATION.test(fio)){
            teacher.fio = fio;
            const selects = elements.querySelectorAll('select');
            let counter = 0;
            while (selects[counter].value !== 'default' && counter < 4) {
                if (teacher.lessons.filter(num => num === selects[counter].value).length === 0)
                    teacher.lessons.push(selects[counter].value);
                else {
                    createMessage("Выбраны несколько одинаковых учебных предметов!");
                    return false;
                }
                counter += 1;
            };
            if (counter > 0){
                addTeacher([...teachers, teacher]);
                // axios.post(backend_url + '/teachers/create', {})
            }
            else
                createMessage("Выберите хотя бы один учебный предмет!") 
        }
        else {
            createMessage("Неправильно заполнено поле!");
            input_field.focus();
        };
        setTimeout(() => {
            createMessage("");
            input_field.blur();
        }, 5000);
    };

    // обновление записи о преподавателе
    const updateTeacher = (event) => {
        event.preventDefault();

    };

    return (
        <>
            <form className='teacher-form' onSubmit={ action == 'enter' ? postTeacher : updateTeacher }>
                <label>Фамилия И.О.</label>
                <input type="text" id='name' />
                <SelectSubject subjects={subjects} counter={number} changeCounter={setNumber} />
                <div className='buttons'>
                    <input type="submit" value={action == 'enter' ? 'Добавить' : "Обновить"} id='submit'/>
                    { action === 'update' ? <button onClick={cancel} >Отменить</button> : <></> }
                </div>
            </form>
        </>
    )
};

export default TeacherForm;
