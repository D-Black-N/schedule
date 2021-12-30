import React from 'react'

const ClassesColumn = ( {class_id, openEditClassSchedule } ) => {
    
    if (class_id.length !== 0){
        return (
            <td className='have-element' onClick={openEditClassSchedule}>
                {class_id}        
            </td>
        )
    }
    else
        return (
            <td className='empty-element'></td>
        )
};

export default ClassesColumn;
