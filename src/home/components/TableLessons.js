import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LessonRow from './LessonRow';

const backend_url = 'http://localhost:3001/api/v1';

const TableLessons = () => {

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        setLessons([{class_id: '5А', subject: 'Математика', teacher: 'Чиглинцева Е.В.'}, 
                    {class_id: '6А', subject: 'Русский язык', teacher: 'Яныбаева Л.С.'},
                    {class_id: '5А', subject: 'Математика', teacher: 'Чиглинцева Е.В.'}, 
                    {class_id: '6А', subject: 'Русский язык', teacher: 'Яныбаева Л.С.'},
                    {class_id: '5А', subject: 'Математика', teacher: 'Чиглинцева Е.В.'}, 
                    {class_id: '6А', subject: 'Русский язык', teacher: 'Яныбаева Л.С.'},
                    {class_id: '5А', subject: 'Математика', teacher: 'Чиглинцева Е.В.'}, 
                    {class_id: '6А', subject: 'Русский язык', teacher: 'Яныбаева Л.С.'},
                    {class_id: '5А', subject: 'Математика', teacher: 'Чиглинцева Е.В.'}, 
                    {class_id: '6А', subject: 'Русский язык', teacher: 'Яныбаева Л.С.'},
                    {class_id: '5А', subject: 'Математика', teacher: 'Чиглинцева Е.В.'}, 
                    {class_id: '6А', subject: 'Русский язык', teacher: 'Яныбаева Л.С.'},
                    {class_id: '5А', subject: 'Математика', teacher: 'Чиглинцева Е.В.'}, 
                    {class_id: '6А', subject: 'Русский язык', teacher: 'Яныбаева Л.С.'},
                    {class_id: '5А', subject: 'Математика', teacher: 'Чиглинцева Е.В.'}, 
                    {class_id: '6А', subject: 'Русский язык', teacher: 'Яныбаева Л.С.'}])
        const get_lessons = setInterval(() => {
            const now = new Date();
            if (now.getMinutes() % 5 === 0){
                // axios.get(backend_url + '/lessons', {time: now}).then(res => setLessons(res))
                // setLessons([{class_id: '5А', subject: 'Математика', teacher: 'Чиглинцева Е.В.'}])
            }
        }, 1000);
        return () => {
            clearInterval(get_lessons)
        }
    }, []);

    // if (lessons.length !== 0)
        return(
            <div className='table-border'>
                <table className="schedule">
                    <thead>
                        <tr>
                            <th>Класс</th>
                            <th>Предмет</th>
                            <th>Преподаватель</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lessons.map((lesson, index) => <LessonRow  les={lesson} key={index} {...lesson} />)}
                    </tbody>
                </table>
            </div>
        );
    // else 
    //     return (
    //         <div className='empty-schedule-table'>В данный момент в учебном заведении отсутсвуют уроки</div>
    //     );
};

export default TableLessons;
