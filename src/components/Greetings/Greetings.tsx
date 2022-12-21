import React, {useCallback} from 'react';
import avatar from '../assets/img/avatar3.jpg'
import s from './Greetings.module.css'
import 'animate.css'
import {ParticlesContainer} from "../Particle/Particles";
import Fade, { AttentionSeeker } from "react-awesome-reveal";


const Greetings = () => {

    return (
        <div className={s.greetings}>
            <div className={s.particles}><ParticlesContainer /></div>
            <AttentionSeeker effect={'wobble'}><Fade className={s.greetingsAnimate}>
                <h2 className={'animate__lightSpeedInRight'}>Hi!<br/>I'm Karolina.<br/>I'm a Front-end developer</h2>
            </Fade></AttentionSeeker>
<p>jhfvjkh fjhdkj fkjdlk kdfjdslk dfkjsdlk kfjlkd kjdflkh </p>
            <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>
    )
};

export default Greetings;
{/*  */}