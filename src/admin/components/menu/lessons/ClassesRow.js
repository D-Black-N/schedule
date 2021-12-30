import React, { useState } from 'react';
import ClassesColumn from './ClassesColumn';

const ClassesRow = ({ row, handleOpenClass }) => {

    return (
        <>
            <tr>
                {row.map((elem, index) => 
                    <ClassesColumn key={index} class_id={elem} {...elem} openEditClassSchedule={handleOpenClass} />    
                )}
            </tr>   
        </>
    )
};

export default ClassesRow;
