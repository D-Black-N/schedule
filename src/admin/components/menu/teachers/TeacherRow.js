import React from 'react'

const TeacherRow = ( { teacher }) => {
    return (
        <>
            <tr>
                <td><p className='clicked'>{teacher.fio}</p></td>
                <td className='teacher-subjects'>{teacher.lessons.join('/')}</td>
                <td><p className='clicked'>Удалить</p></td>
            </tr>   
        </>
    )
}

export default TeacherRow;