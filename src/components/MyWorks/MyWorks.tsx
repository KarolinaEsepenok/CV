import React from 'react';
import Work from "./Work/Work";
import s from './MyWorks.module.css'

const MyWorks = () => {
    return (
        <div className={s.myWorksPage}>
            <h3>My Works</h3>
            <div className={s.myWorkItem}>
            <Work/>
            <Work/>
            </div>
        </div>
    );
};

export default MyWorks;