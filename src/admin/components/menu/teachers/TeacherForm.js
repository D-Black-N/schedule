import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SelectSubject from './SelectSubject';

const FIO_VALIDATION = /[А-Я][а-я]+ [А-Я]\.[А-Я]\./;
const TEACHER_URL = "http://localhost:3001/api/v1/teacher";


export const TeacherForm = ( { action, cancel, subjects, createMessage, addTeacher } ) => {

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
        const teacher_params = { fio: '', subjects: []};
        mes.style.color = 'red';
        if (FIO_VALIDATION.test(fio)){
            teacher_params.fio = fio;
            const selects = elements.querySelectorAll('select');
            let counter = 0;
            while (counter < 4 && selects[counter].value !== 'default') {
                if (teacher_params.subjects.filter(num => num.id === selects[counter].value).length === 0)
                    teacher_params.subjects.push({id: selects[counter].value});
                else {
                    createMessage("Выбраны несколько одинаковых учебных предметов!");
                    return false;
                }
                counter += 1;
            };
            if (counter > 0){
                axios.post(TEACHER_URL, {teacher: teacher_params }).then(res => addTeacher(prev => [...prev, res.data]))
                mes.style.color = 'green';
                input_field.value = '';
                selects.forEach((element, index) => {
                    element.value = 'default';
                    if (index > 0)
                        element.style.display = 'none';
                });
                setNumber(1);
                createMessage("Преподаватель успешно добавлен в список!");
            }
            else createMessage("Выберите хотя бы один учебный предмет!");
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
        const elements = event.target;
        const fio = elements.name.value;
        const teacher_id = elements.teacher_id.value;
        const teacher_params = { id: '', fio: '', subjects: []};
        mes.style.color = 'red';
        if (FIO_VALIDATION.test(fio)){
            teacher_params.fio = fio;
            teacher_params.id = teacher_id;
            const selects = elements.querySelectorAll('select');
            let counter = 0;
            while (counter < 4 && selects[counter].value !== 'default') {
                if (teacher_params.subjects.filter(num => num.id === selects[counter].value).length === 0)
                    teacher_params.subjects.push({id: selects[counter].value});
                else {
                    createMessage("Выбраны несколько одинаковых учебных предметов!");
                    return false;
                }
                counter += 1;
            };
            if (counter > 0) {
                axios.patch(TEACHER_URL + `/${teacher_id}`, {teacher: teacher_params }).then(res => console.log(res.data));
                mes.style.color = 'green';
                input_field.value = '';
                selects.forEach((element, index) => {
                    element.value = 'default';
                    if (index > 0)
                        element.style.display = 'none';
                });
                setNumber(1);
                createMessage("Данные о преподавателе успешно обновлены!");
            }
            else createMessage("Выберите хотя бы один учебный предмет!");
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

    return (
        <>
            <form className='teacher-form' onSubmit={ action == 'enter' ? postTeacher : updateTeacher }>
                <label>Фамилия И.О.</label>
                <input type='hidden' name='teacher_id' id='teacher_id' />
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
