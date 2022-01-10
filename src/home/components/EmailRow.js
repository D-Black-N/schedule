import React, {useState, useEffect} from 'react';

const EmailRow = () => {

    const [email, setEmail] = useState('');

    useEffect(() => {
        setEmail("Строка для оповещения!")
    }, []);

    return (
        <>
            <p className='text-information'>{email}</p>
        </>
    )
};

export default EmailRow;
