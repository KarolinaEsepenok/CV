import React, {useCallback} from 'react';
import avatar from '../assets/img/avatar3.jpg'
import s from './Greetings.module.css'
import 'animate.css'
import {ParticlesContainer} from "../Particle/Particles";




const Greetings = () => {

    return (

        <div className={s.greetings}>
<ParticlesContainer/>
          <h2 className={'animate__lightSpeedInRight'}>Hi!<br/>I'm Karolina.<br/>I'm a Front-end developer</h2>
 <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>

    )
};

export default Greetings;