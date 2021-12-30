import React from 'react'

export const SelectOption = ({ subject }) => {

    return (
        <>
            <option value={subject.name}>
                {subject.name}
            </option>   
        </>
    )
};

export default SelectOption;
