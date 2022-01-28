import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TeacherRow from './TeacherRow';
import TeacherForm from './TeacherForm';


const backend_url = 'http://localhost:3001/api/v1';

export const Teacher = () => {

    const [teachers, setTeachers] = useState([]);
    const [message, setMessage] = useState('');
    const [action, setAction] = useState('enter');
    const [name, setName] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [counter, setCounter] = useState(0);

    // загрузка данных о преподавателях из API
    useEffect(() => {
        axios.get(backend_url + '/teacher').then(res => setTeachers(res.data));
        axios.get(backend_url + '/subject').then(res => setSubjects(res.data));
    }, []);

    // открытие формы обновления информации о преподавателе
    const renderUpdateForm = (event) => {
        event.preventDefault();
        const form = document.querySelector('.add'); 
        form.querySelector('h3').innerText = "Обновление данных о преподавателе";
        const target = event.target;
        const teacher_id = target.parentNode.querySelector("input").value;
        form.querySelector("input#teacher_id").value = teacher_id;
        setAction('update');
        const teacher = find(teacher_id);
        setCounter(teacher.subjects.length);
        setName(teacher.teacher.fio);
        document.querySelector('input#name').value = teacher.teacher.fio;
        const selectors = document.querySelectorAll("select");
        const buttons = form.querySelector(".buttons");
        teacher.subjects.map((elem, index) => {
            selectors[index].value = elem.id;
            selectors[index].style.cssText = `grid-row: ${index + 3}; display: inline;`;
            buttons.style.cssText = `grid-row: ${index + 4};`;
        });
    };

    // метод поиска преподавателя в списке teachers
    const find = (teacher_id) => {
        return teachers.filter(elem => elem.teacher.id == teacher_id)[0]
    };

    // метод удаления преподавателя из списка
    const destroyTeacherClick = (event) => {
        event.preventDefault();
        const row = event.target.parentNode.parentNode;
        const teacher_id = row.querySelector("input").value
        axios.delete(backend_url + `/teacher/${teacher_id}`)
             .then(res => setTeachers(prev => prev.filter(value => value.teacher.id != res.data.id)))
        document.querySelector(".message").style.color = 'red';
        setMessage("Преподаватель успешно удален из списка!");
    };

    // метод открытия формы добавления данных о преподавателе
    const renderAddForm = (event) => {
        setAction("enter");
        const form = document.querySelector('.add'); 
        form.querySelector('h3').innerText = "Добавление данных о преподавателе";
        form.querySelector("input#name").value = "";
        document.querySelectorAll("select").forEach((element, index) => {
            element.value = "default";
            setCounter(0);
            if (index > 0)
                element.style.cssText = `grid-row: ${counter + 3}; display: none;`;
            event.target.parentNode.style.cssText = `grid-row: 4;`;
        });
    }

    return (
        <>
            <div className='list'>
                <h3>Список преподавателей</h3>
                <table className='teachers-table'>
                    <tbody>
                        {teachers.map((elem, index) => 
                            <TeacherRow t={elem} 
                                      key={index} 
                                      {...elem} 
                                      onTeacherClick={renderUpdateForm}
                                      deleteTeacher={destroyTeacherClick} />
                        )}
                    </tbody>
                </table>
            </div>
            <div className='add'>
                <h3>Добавление данных о преподавателе</h3>
                <TeacherForm findTeacher={find}
                             action={action} 
                             createMessage={setMessage} 
                             teachers={teachers} 
                             addTeacher={setTeachers}
                             name={name}
                             subjects={subjects}
                             changeCounter={setCounter}
                             cancel={renderAddForm} />
                <div className='message'>
                    {message}
                </div>
            </div>
        </>
    )
};

export default Teacher;
