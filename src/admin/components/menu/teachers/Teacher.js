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

    // загрузка данных о преподавателях из API
    useEffect(() => {
        axios.get(backend_url + '/teachers').then(res => setTeachers(res.data));
        axios.get(backend_url + '/subjects').then(res => setSubjects(res.data));
    }, []);

    // открытие формы обновления информации о преподавателе
    const renderUpdateForm = (event) => {
        document.querySelector('.add-subject').querySelector('h3').innerText = "Обновление данных о преподавателе";
        event.preventDefault();
        const sub_name = event.target.innerText;
        setAction('update');
        const subject = find(sub_name)[0].name
        setName(subject);
        document.querySelector('input#name').value = subject; 
    };

    // метод поиска преподавателя в списке teachers
    const find = (teacher_fio) => {
        return 0;
    };

    // метод открытия формы добавления данных о преподавателе
    const renderAddForm = () => {

    }

    return (
        <>
            <div className='list'>
                <h3>Список преподавателей</h3>
                <table className='teachers-table'>
                    <tbody>
                        {teachers.map((elem, index) =>
                            <TeacherRow teacher={elem} 
                                      key={index} 
                                      {...elem} 
                                      onTeacherClick={renderUpdateForm}
                                      teacherState={setTeachers}
                                      createMessage={setMessage} 
                                    />
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
                             base={renderAddForm}
                             subjects={subjects} />
                <div className='message'>
                    {message}
                </div>
            </div>
        </>
    )
};

export default Teacher;
