import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LessonRow from './LessonRow';

const backend_url = 'http://localhost:3001/api/v1';

const TableLessons = ({class_group}) => {

    const [lessons, setLessons] = useState([]);
    const [visual, setVisual] = useState([]);

    useEffect(() => {
        if (class_group === 1)
            setLessons([{class_id: '5А', subject: 'Математика', teacher: 'Петров Е.В.'}, 
                        {class_id: '5Б', subject: 'Русский язык', teacher: 'Александров Л.С.'},
                        {class_id: '6А', subject: 'Математика', teacher: 'Петров Е.В.'}, 
                        {class_id: '6Б', subject: 'Русский язык', teacher: 'Александров Л.С.'},
                        {class_id: '7А', subject: 'Математика', teacher: 'Петров Е.В.'}, 
                        {class_id: '7Б', subject: 'Русский язык', teacher: 'Александров Л.С.'},
                        {class_id: '7В', subject: 'Математика', teacher: 'Петров Е.В.'}, 
                        {class_id: '8А', subject: 'Русский язык', teacher: 'Александров Л.С.'},
                        {class_id: '9А', subject: 'Математика', teacher: 'Петров Е.В.'}, 
                        {class_id: '9Б', subject: 'Русский язык', teacher: 'Александров Л.С.'},
                        {class_id: '10А', subject: 'Математика', teacher: 'Петров Е.В.'}, 
                        {class_id: '10Б', subject: 'Русский язык', teacher: 'Александров Л.С.'},
                        {class_id: '11', subject: 'Математика', teacher: 'Петров Е.В.'}, 
                        {class_id: '6А', subject: 'Русский язык', teacher: 'Александров Л.С.'},
                        {class_id: '5А', subject: 'Математика', teacher: 'Петров Е.В.'}, 
                        {class_id: '6А', subject: 'Русский язык', teacher: 'Александров Л.С.'}])
        else
            setLessons([
                {class_id: '1А', subject: 'Математика', teacher: 'Пертров Е.В.'},
                {class_id: '1Б', subject: 'Математика', teacher: 'Петров Е.В.'},
                {class_id: '1В', subject: 'Математика', teacher: 'Петров Е.В.'},
                {class_id: '2А', subject: 'Математика', teacher: 'Петров Е.В.'},
                {class_id: '2Б', subject: 'Математика', teacher: 'Петров Е.В.'},
                {class_id: '2В', subject: 'Математика', teacher: 'Петров Е.В.'},
                {class_id: '3А', subject: 'Математика', teacher: 'Петров Е.В.'},
                {class_id: '3Б', subject: 'Математика', teacher: 'Петров Е.В.'},
                {class_id: '4А', subject: 'Математика', teacher: 'Петров Е.В.'},
                {class_id: '4Б', subject: 'Математика', teacher: 'Петров Е.В.'},
                {class_id: '4В', subject: 'Математика', teacher: 'Петров Е.В.'},
            ])
        // const get_lessons = setInterval(() => {
        //     const now = new Date();
        //     if (now.getMinutes() % 5 === 0){
        //         // axios.get(backend_url + '/lessons', {time: now}).then(res => setLessons(res))
        //         // setLessons([{class_id: '5А', subject: 'Математика', teacher: 'Петров Е.В.'}])
        //     }
        // }, 1000);
        // return () => {
        //     clearInterval(get_lessons)
        // }
    }, [class_group]);

    if (lessons.length !== 0)
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
    else 
        return (
            <div className='empty-schedule-table'>В данный момент в учебном заведении отсутсвуют уроки</div>
        );
};

export default TableLessons;
