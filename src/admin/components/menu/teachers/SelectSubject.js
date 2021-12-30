import React from 'react';
import SelectOption from './SelectOption';


const SelectSubject = ( { subjects, counter, changeCounter }) => {

     // метод добавления списка выбора предмета
     const addSelectSubjectField = (event) => {
        event.preventDefault();
        changeCounter(prev => prev += 1);
        document.querySelectorAll('select')[counter].style.cssText = `grid-row: ${counter + 3}; display: inline;`;
        document.querySelector('.buttons').style.cssText = `grid-row: ${counter + 4}`;
        if (counter === 1){
            document.querySelector('#disable-select').style.display = 'inline';
        }
        if (counter === 3)
            document.querySelector('#enable-select').disabled = true;
    };

    // метод сокращения списка выбора предметов
    const removeSelectSubjectField = (event) => {
        event.preventDefault();
        changeCounter(prev => prev -= 1);
        const select = document.querySelectorAll('select')[counter - 1];
        select.style.display = 'none';
        select.value = 'default';
        document.querySelector('.buttons').style.cssText = `grid-row: ${counter + 2}`;
        if (counter === 4)
            document.querySelector('#enable-select').disabled = false;
        if (counter === 2)
            document.querySelector('#disable-select').style.display = 'none';
    };

    return (
        <>
            <select name='sub_one' defaultValue={'default'}>
                <option disabled value={'default'}>Выберите учебный предмет</option>
                {subjects.map((element, index) => <SelectOption subject={element} key={index} {...element} />)}
            </select>
            <button id="enable-select" onClick={addSelectSubjectField}>+</button>
            <select name='sub_two' defaultValue={'default'}>
                <option disabled value={'default'}>Выберите учебный предмет</option>
                {subjects.map((element, index) => <SelectOption subject={element} key={index} {...element} />)}
            </select>
            <button id="disable-select" onClick={removeSelectSubjectField}>-</button>
            <select name='sub_three' defaultValue={'default'}>
                <option disabled value={'default'}>Выберите учебный предмет</option>
                {subjects.map((element, index) => <SelectOption subject={element} key={index} {...element} />)}
            </select>
            <select name='sub_four' defaultValue={'default'}>
                <option disabled  value={'default'}>Выберите учебный предмет</option>
                {subjects.map((element, index) => <SelectOption subject={element} key={index} {...element} />)}
            </select>
        </>
    )
};

export default SelectSubject;
