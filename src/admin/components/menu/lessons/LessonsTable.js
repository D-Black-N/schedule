import React from 'react';
import { LessonRow } from './LessonRow';

const lesson_numbers = [1 , 2, 3, 4, 5, 6, 7];

const LessonsTable = ( {week_day} ) => {
    return (
        <div>
            <div className='week-header'>{week_day}</div>
            <input type={'hidden'} value={week_day} name='week_day' />
            <table className='lessons-table'>
                <tbody>
                    {lesson_numbers.map((number, index) => <LessonRow num={number} key={index} {...number} />)}
                </tbody>
            </table>
        </div>
    )
};

export default LessonsTable;
