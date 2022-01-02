import React from 'react';
import axios from 'axios';

const backend_url = 'http://localhost:3001/api/v1';

const SubjectForm = ( { subjects, findSubject, action, createMessage, addSubject, name, base } ) => {

    const input_field = document.querySelector('input#name');
    const mes = document.querySelector('.message');

    // нажатие на кнопку добавления предмета
    const postSubject = (event) => {
        event.preventDefault();
        const new_subject = event.target.name.value;
        mes.style.color = 'red';
        if (new_subject === "") {
            createMessage("Заполните поле!")
            input_field.focus();
        }
        else {
            if (findSubject(new_subject).length !== 0){
                input_field.focus();
                createMessage("Данный предмет существует!");
            }
            else {
                input_field.value = "";
                mes.style.color = 'green';
                createMessage("Учебный предмет добавлен успешно!");
                addSubject([...subjects, {name: new_subject}])
                // axios.post(backend_url + '/subject/create', { name: new_subject });
            }
        };
        setTimeout(() => {
            createMessage("");
            input_field.blur();
        }, 5000);
    };

    // нажатие на кнопку обновления предмета
    const updateSubject = (event) => {
        event.preventDefault();
        const update_subject = event.target.name.value;
        mes.style.color = 'red';
        if (update_subject === "") {
            createMessage("Заполните поле!");
            input_field.focus();
        }
        else {
            subjects.map( item => item.name == name ? item.name = update_subject : item);
            input_field.value = "";
            mes.style.color = 'green';
            createMessage("Учебный предмет обновлен успешно!");
            base();
        }
        setTimeout(() => {
            createMessage("");
            input_field.blur();
        }, 5000);
        // subjects.map(item => item.id == event.target.update.id ? item.name = event.target.update.value : item);
    };

    // нажатие на кнопку "Отмена"
    const cancel = () => {
        input_field.value = "";
        base();
    };

    return (
        <>
            <form className='subject-form' onSubmit={ action == 'enter' ? postSubject : updateSubject}>
                <label>Наименование</label>
                <input type="text" id='name' />
                <div className='buttons'>
                    <input type="submit" value={action == 'enter' ? 'Добавить' : "Обновить"} id='submit'/>
                    { action === 'update' ? <button onClick={cancel} >Отменить</button> : <></> }
                </div>
            </form>
        </>
    )
};

export default SubjectForm;
