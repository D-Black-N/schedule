import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubjectForm from './SubjectForm';
import SubjectRow from './SubjectRow';

const SUBJECT_URL = 'http://localhost:3001/api/v1/subject/';

const Subject = () => {

    const [subjects, setSubjects] = useState([]);
    const [message, setMessage] = useState("");
    const [action, setAction] = useState('enter');
    const [name, setName] = useState('');

    const mes = document.querySelector('.message');


    // метод загрузки данных об учебных предметах из API
    useEffect(() => {
        axios.get(SUBJECT_URL).then(res => setSubjects(res.data))
    }, []);

    // метод поиска учебного предмета при добавлении
    const find = (subject_name) => {
        return subjects.filter( item => item.name === subject_name)
    };

    // нажатие на учебный предмет для обновления
    const renderUpdateForm = (event) => {
        event.preventDefault();
        document.querySelector('.add').querySelector('h3').innerText = "Обновление учебного предмета";
        setAction('update');
        const subject = find(event.target.innerText)[0]
        setName(subject.name);
        document.querySelector('input#update_subject_id').value = subject.id;
        document.querySelector('input#name').value = subject.name; 
    };
    
    const renderAddFrom = () => {
        setAction('enter');
        document.querySelector('.add').querySelector('h3').innerText = "Добавление учебного предмета";
    };

    const destroySubjectClick = (event) => {
        event.preventDefault();
        if(window.confirm('Вы действительно хотите удалить?')){
            const element = event.target.parentNode.parentNode
            setSubjects(prev => 
                prev.filter(elem => elem.name != element.querySelector('p').innerText)
            );
            const subj_id = element.querySelector("#subject_id").value;
            axios.delete(SUBJECT_URL + `${subj_id}`).then(res => console.log(res.data));
            mes.style.color = 'red';
            setMessage("Учебный предмет удален успешно!");
            setTimeout(() => {
                setMessage("");
            }, 5000);
        }
    }
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
                            <SubjectRow subject={elem} 
                                      key={index} 
                                      {...elem} 
                                      onSubjectClick={renderUpdateForm}
                                      removeSubject={destroySubjectClick} />
                        )}
                    </tbody>
                </table>
            </div>
            <div className='add'>
                <h3>Добавление учебного предмета</h3>
                <SubjectForm findSubject={find}
                             action={action} 
                             createMessage={setMessage} 
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