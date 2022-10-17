import React from 'react';
import avatar from '../img/avatar.jpg'
import s from './Greetings.module.css'
const Greetings = () => {
    return (
        <div className={s.greetings}>
            <h2>Привет! Меня зовут Каролина. Я front-end разработчик</h2>
 <img src={avatar}/>
        </div>

    )
};

export default Greetings;