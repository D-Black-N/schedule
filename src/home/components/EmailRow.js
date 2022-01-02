import React, {useState} from 'react';

const EmailRow = () => {

    const [email, setEmail] = useState('');

    return (
        <>
            <p className='text-information'>{email}</p>
        </>
    )
};

export default EmailRow;
