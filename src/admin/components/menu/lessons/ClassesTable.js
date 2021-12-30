import React from 'react';
import ReactDOM from 'react-dom';
import ClassesRow from './ClassesRow';
import EditSchedule from './EditSchedule';

const ClassesTable = ({ classes, onReturnClick }) => {

    const class_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11]

    const openSchedule = (event) => {
        event.preventDefault();
        ReactDOM.render(<EditSchedule returnMain={onReturnClick} />, document.querySelector('.content'));
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {class_numbers.map(id => <th>{id}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {classes.map((element, index) => <ClassesRow 
                                                                row={element} 
                                                                key={index} 
                                                                {...element} 
                                                                handleOpenClass={openSchedule}
                                                                 />
                    )}
                </tbody>
            </table>  
        </>
    )
};

export default ClassesTable;
