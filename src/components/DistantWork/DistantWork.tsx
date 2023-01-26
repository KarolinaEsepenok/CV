import React from 'react';
import s from './DistantWork.module.scss'
import  {AttentionSeeker} from "react-awesome-reveal";

const DistantWork = () => {
    return (<AttentionSeeker effect={'pulse'} cascade>
        <div id={'contacts'}  className={s.distanceWork}>

            <div className={s.distanceWorkInfo}>
            <p className={s.distanceWorkMessage}>I'm looking at remote work options</p>
           </div>
        </div></AttentionSeeker>
    );
};

export default DistantWork;