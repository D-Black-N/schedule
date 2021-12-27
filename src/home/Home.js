import React from 'react';
import Header from "../header/Header";
import Content from "./components/Content";
import Information from "./components/Information";
import './Home.css';

export default function Home() {
    return (
        <div>
            <Header head="Учебное расписание школы"/>
            <Information />
            <Content />
        </div>
    )
};
