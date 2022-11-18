import React from 'react';
import s from './DistantWork.module.scss'

const DistantWork = () => {
    return (
        <div className={s.distanceWork}>
            <div className={s.distanceWorkInfo}>
            <p>I'm looking at remote work options</p>
            <button >Hire me</button></div>
        </div>
    );
};

export default DistantWork;