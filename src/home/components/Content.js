import TableLessons from "./TableLessons";
import Clock from "./Clock";

import React from 'react'

const Content = () => {
    return(
        <div className="content">
            <div className="table">
                <TableLessons />
            </div>
            <div className="clocks">
                <Clock />   
            </div>
        </div>
    );
}

export default Content;