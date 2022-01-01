import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ClassesTable from './ClassesTable';
import Schedule from './Schedule';

const Lesson = () => {

    const [classes, setClasses] = useState([]);

    const go_back = (event) => {
        event.preventDefault();
        ReactDOM.render(<Lesson />, document.querySelector('.content'))
    };

    const newSchedule = (event) => {
        event.preventDefault();
        ReactDOM.render(<Schedule returnMain={go_back} />, document.querySelector('.content'))
    };

    const deleteAllSchedule = (event) => {
        event.preventDefault();
        if (window.confirm("Вы уверены?"))
            alert("Расписание удалено")
    };

    useEffect(() => {
        setClasses([ ['1А', '2А', '3А', '4А', '5А', '6А', '7А', '8А', '9А', '10', '11' ],
                     ['1Б', '2Б', '3Б', '4Б', '5Б', '6Б', '7Б', '8Б', '9Б', '',   '' ],
                     ['1В', '2В', '3В', '4В', '5В', '6В', '', '8В', '9В',   '',   '' ],
                     ['1Г', '2Г', '',   '4Г', '',   '',   '', '',   '',     '',   '' ],
                    ]);
    }, []);

    return (
        <div className='lesson'>
            <div className='classes-table'>
                <ClassesTable classes={classes}  {...classes} onReturnClick={go_back} />
            </div>
            <div className='lesson-buttons'>
                <button onClick={newSchedule}>Создать расписание класса</button>       
                <button onClick={deleteAllSchedule}>Удалить расписание школы</button>       
            </div>
        </div>
    )
};

export default Lesson;
