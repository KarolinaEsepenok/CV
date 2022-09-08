import React from 'react';
import avatar from '../img/fff.jpg'
import s from './Greetings.module.css'
const Greetings = () => {
    return (
        <div className={s.greetings}>
            <h2>Привет! Меня зовут Каролина. Я front-end разработчик</h2>
<div> <img src={avatar}/></div>


        </div>
    );
};

export default Greetings;