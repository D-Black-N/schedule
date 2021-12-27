import React from 'react';
import axios from 'axios';

const SubjectRow = ( { subject, onSubjectClick, subjectState, postMessage } ) => {

    const mes = document.querySelector('.message');

    const removeSubject = (event) => {
        if(window.confirm('Вы действительно хотите удалить?')){
            subjectState(prev => 
                prev.filter(elem => elem.name != event.target.parentNode.parentNode.querySelector('p').innerText)
            );
            // axios.delete()
            mes.style.color = 'red';
            postMessage("Учебный предмет удален успешно!");
            setTimeout(() => {
                postMessage("");
            }, 5000);
        }
    }

    return (
        <>
            <tr>
                <td><p onClick={onSubjectClick} className='clicked'>{subject}</p></td>
                <td><p onClick={removeSubject} className='clicked'>Удалить</p></td>
            </tr>   
        </>
    )
};

export default SubjectRow;
