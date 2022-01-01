import React from 'react'

const LessonRow = ({les}) => {
    return (
        <tr>
            <td>{les.class_id}</td>
            <td>{les.subject}</td>
            <td>{les.teacher}</td>
        </tr>
    )
};

export default LessonRow;
