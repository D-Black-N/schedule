import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubjectForm from './SubjectForm';
import SubjectRow from './SubjectRow';

const backend_url = 'http://localhost:3001/api/v1';

const Subject = () => {

    const [subjects, setSubjects] = useState([]);
    const [message, setMessage] = useState("");
    const [action, setAction] = useState('enter');
    const [name, setName] = useState('');

    // метод загрузки данных об учебных предметах из API
    useEffect(() => {
        axios.get(backend_url + '/subjects').then(res => setSubjects(res.data))
    }, []);

    // метод поиска учебного предмета при добавлении
    const find = (subject_name) => {
        return subjects.filter( item => item.name === subject_name)
    };

    // нажатие на учебный предмет для обновления
    const renderUpdateForm = (event) => {
        document.querySelector('.add-subject').querySelector('h3').innerText = "Обновление учебного предмета";
        event.preventDefault();
        const sub_name = event.target.innerText;
        setAction('update');
        const subject = find(sub_name)[0].name
        setName(subject);
        document.querySelector('input#name').value = subject; 
    };
    
    const renderAddFrom = () => {
        setAction('enter');
        document.querySelector('.add-subject').querySelector('h3').innerText = "Добавление учебного предмета";
    };

    return (
        <>
            <div className='list'>
                <h3>Список учебных предметов</h3>
                <table className='subjects-table'>
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((elem, index) =>
                            <SubjectRow subject={elem.name} 
                                      key={index} 
                                      {...elem} 
                                      onSubjectClick={renderUpdateForm}
                                      subjectState={setSubjects}
                                      createMessage={setMessage} />
                        )}
                    </tbody>
                </table>
            </div>
            <div className='add'>
                <h3>Добавление учебного предмета</h3>
                <SubjectForm findSubject={find}
                             action={action} 
                             postMessage={setMessage} 
                             subjects={subjects} 
                             addSubject={setSubjects}
                             name={name}
                             base={renderAddFrom} />
                <div className='message'>
                    {message}
                </div>
            </div>
        </>
    )
};

export default Subject;