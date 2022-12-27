import React from 'react';
import s from './DistantWork.module.scss'

const DistantWork = () => {
    return (
        <div id={'contacts'}  className={s.distanceWork}>
            <div className={s.distanceWorkInfo}>
            <p className={s.distanceWorkMessage}>I'm looking at remote work options</p>
            <button >Hire me</button></div>
        </div>
    );
};

export default DistantWork;