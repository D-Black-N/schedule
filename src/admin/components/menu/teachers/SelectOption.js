import React from 'react'

export const SelectOption = ({ subject }) => {

    return (
        <>
            <option value={subject.id}>
                {subject.name}
            </option>   
        </>
    )
};

export default SelectOption;
