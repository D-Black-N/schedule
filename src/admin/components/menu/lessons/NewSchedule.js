import React from 'react';

const NewSchedule = ( { returnMain } ) => {

    return (
        <div className='new-schedule'>
            <h2>Create new class schedule</h2>
            <a onClick={returnMain}>go back</a>
        </div>
    )
};

export default NewSchedule;
