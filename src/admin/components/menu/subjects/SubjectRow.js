import React from 'react';

const SubjectRow = ( { subject, onSubjectClick, removeSubject} ) => {

    return (
        <>
            <tr>
                <td>
                    <input type={'hidden'} name='subject_id' value={subject.id} id='subject_id' />
                    <p onClick={onSubjectClick} className='clicked'>{subject.name}</p>
                </td>
                <td><p onClick={removeSubject} className='clicked'>Удалить</p></td>
            </tr>   
        </>
    )
};

export default SubjectRow;
