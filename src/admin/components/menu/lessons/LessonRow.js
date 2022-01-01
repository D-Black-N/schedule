import React from 'react';

const hours = [ '09', '10', '11', '12', '13', '14', '15', '16'];
const minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

export const LessonRow = ( {num} ) => {
    return (
        <tr>
            <td>{num}</td>
            <td className='td-select'>
                <select className='subject-select'>
                    <option disabled value='default'>Учебный предмет</option>
                </select>
            </td>
            <td className='td-select'>
                <select className='teacher-select'>
                    <option disabled value='default'>Преподаватель</option>
                </select>
            </td>
            <td className='td-time'>
                <select className='hour'>
                    {hours.map((hour, index) => <option key={index}>{hour}</option>)}
                </select> : 
                <select className='minute'>     
                    {minutes.map((min, index) => <option key={index}>{min}</option>)} 
                </select>
            </td>
            <td className='td-time'>
                <select className='hour'>
                    {hours.map((hour, index) => <option key={index}>{hour}</option>)}
                </select> : 
                <select className='minute'>     
                    {minutes.map((min, index) => <option key={index}>{min}</option>)} 
                </select>
            </td>
        </tr>
    )
}
