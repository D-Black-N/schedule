import TableLessons from "./TableLessons";
import Clock from "./Clock";
import React, {useState, useEffect} from 'react';

const Content = () => {

    const [selection, setSelection] = useState(0)

    const handleClick = (event) => {
        event.preventDefault();
        const clicked = document.querySelector('.clicked');
        if (clicked != null )
            clicked.classList.remove('clicked');
        event.target.classList.add('clicked');
        if (selection === 0)
            setSelection(1);
        else
            setSelection(0);
    }

    useEffect(() => {
        document.querySelector('.junior').classList.add('clicked')
    }, [])

    return(
        <div className="content">
            <div className="table">
                <div className="change-buttons">
                    <div className="junior" onClick={handleClick}>1-4 классы</div>
                    <div className="senior" onClick={handleClick}>5-11 классы</div>
                </div>
                <TableLessons />
            </div>
            <div className="clocks">
                <Clock />   
            </div>
        </div>
    );
}

export default Content;