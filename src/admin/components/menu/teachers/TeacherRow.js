import React from 'react';

const TeacherRow = ({ t, deleteTeacher, onTeacherClick }) => {

    return (
        <>
            <tr>
                <td>
                    <input type={'hidden'} value={t.teacher.id} id='teacher_id'/>
                    <p className='clicked' onClick={onTeacherClick}>{t.teacher.fio}</p>
                </td>
                <td className='teacher-subjects'>{t.subjects.map(e => e.name).join('/')}</td>
                <td><p className='clicked' onClick={deleteTeacher}>Удалить</p></td>
            </tr>   
        </>
    )
}

export default TeacherRow;