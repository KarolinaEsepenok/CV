import React from 'react';
import ava from '../img/ava.jpg'

import s from './MyWorks.module.css'

const MyWorks = () => {
    return (
        <div className={s.myWorksPage}>
            <h3>My Works</h3>
            <div className={s.myWorkItems}>
                <div className={s.myWorkItem}>
                   <div className={s.myWorkItemImgButton}><a href={''}> Смотреть</a></div>
                    <p>Название проекта</p>
                    <p>Краткое Описание</p>
            </div>
                <div className={s.myWorkItem}>
                    <div className={s.myWorkItemImgButton}><a href={''}> Смотреть</a></div>
                    <p>Название проекта</p>
                    <p>Краткое Описание</p>
                </div>

            </div>
        </div>
    );
};

export default MyWorks;