import React from 'react';

import s from './MyWorks.module.css'

const MyWorks = () => {
    return (
        <div className={s.myWorksPage}>
            <h3>My Works</h3>
            <div className={s.myWorkItems}>
                <div className={s.myWorkItemImg}>
                    <img/>
                    <a> <button>Смотреть</button></a>
                    <p>Название проекта</p>
                    <p>Краткое Описание</p>
            </div>
                <div className={s.myWorkItemImg}>
                    <img/>
                    <a> <button>Смотреть</button></a>
                    <p>Название проекта</p>
                    <p>Краткое Описание</p>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;