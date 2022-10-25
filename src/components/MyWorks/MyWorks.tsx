import React from 'react';
import ava from '../img/ava.jpg'

import s from './MyWorks.module.css'

const MyWorks = () => {
    return (
        <div className={s.myWorksPage}>
            <h3>My Works</h3>
            <div className={s.myWorkItems}>
                <div className={s.myWorkItemImg}>
                    <img  src={ava}/>
                    <a href={''}> Смотреть</a>
                    <p>Название проекта</p>
                    <p>Краткое Описание</p>
            </div>
                <div className={s.myWorkItemImg}>
                    <img/>
                    <a href={''}> Смотреть</a>
                    <p>Название проекта</p>
                    <p>Краткое Описание</p>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;