import React from 'react';
import LessonsTable from './LessonsTable';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];

const Schedule = ( { returnMain } ) => {

    return (
        <div className='new-schedule'>
            <form >
                <div className='action'>
                    <div>
                        <label htmlFor='class_id'>Класс</label>
                        <input type='text' name='class_id' id='class-name' placeholder='Например: "6А"' />
                    </div>
                    <div>
                        <input type='submit' value='Создать' id='submit' />
                    </div>
                    <div>
                        <button onClick={returnMain}>Назад</button>
                    </div>
                </div>
                <div className='create-schedule'>
                    {week.map((day, index) => <LessonsTable week_day={day} key={index} {...day} />)}            
                </div>
            </form>
        </div>
    )
};

export default Schedule;
