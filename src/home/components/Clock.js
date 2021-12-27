import React, { useState, useEffect } from "react";
import ClockFace from '../../images/clock.png'
import ClockHour from '../../images/hour.png'
import ClockMinute from '../../images/min.png'
import ClockSecond from '../../images/sec.png'
// import './Clock.css'

const week_day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"]

const Clock = () => {
    let [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()));

        return () => {
            clearInterval(interval)
        }
    }, [])

    const hour = {
        transform: `rotate(${time.getHours() * 30 + time.getMinutes() * 0.5}deg)`
    };
    const minute = {
        transform: `rotate(${time.getMinutes()*6}deg)`
    };
    const second = {
        transform: `rotate(${time.getSeconds()*6}deg)`
    };
    return (
        <div>
            <div className="digital-clock">
                <div className="date">
                    {time.getDate()} {month[time.getMonth()]} {time.getFullYear()}, {week_day[time.getDay()]}
                </div>
                <div className="time">
                    {time.toLocaleTimeString("ru")}
                </div>
                </div>
                <div className="analog-clock">
                    <img src={ClockFace} className="clock-face" alt="Часы" />
                    <img src={ClockHour} className="clock-hour" style={hour} />
                    <img src={ClockMinute} className="clock-minute" style={minute} />
                    <img src={ClockSecond} className="clock-second" style={second} />
                </div>
        </div>
    )
};

export default Clock;
