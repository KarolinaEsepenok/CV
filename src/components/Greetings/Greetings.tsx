import React from 'react';
import avatar from '../img/avatar.jpg'
import s from './Greetings.module.css'
import 'animate.css'

const Greetings = () => {
    return (
        <div className={s.greetings}>
          <h2 className={'animate__lightSpeedInRight'}>Привет!<br/> Меня зовут Каролина.<br/> Я front-end разработчик</h2>
 <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>

    )
};

export default Greetings;