import React from 'react';
import avatar from '../img/ava.jpg'
import s from './Greetings.module.css'
const Greetings = () => {
    return (
        <div className={s.greetings}>
            <h2>Привет!<br/> Меня зовут Каролина.<br/> Я front-end разработчик</h2>
 <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>

    )
};

export default Greetings;