import React from 'react';
import avatar from '../assets/img/avatar3.jpg'
import s from './Greetings.module.css'
import 'animate.css'
import {ParticlesContainer} from "../Particle/Particles";
import Fade, {AttentionSeeker, Bounce, Zoom} from "react-awesome-reveal";

const Greetings = () => {

    return (
        <div id={'main'} className={s.greetings}>
            <div className={s.particles}><ParticlesContainer /></div>
            <div className={s.nameDescrAboutMe}>
            <AttentionSeeker  effect={'swing'}><Fade className={s.greetingsAnimate}>
                <h2 className={'animate__lightSpeedInRight'}>Hi!<br/>I'm Karolina.<br/> I'm a Front-end developer.<br/></h2>
            </Fade></AttentionSeeker>
                <AttentionSeeker effect={'headShake'}><Bounce><p className={s.descrAboutMe}>I'm a communicative, proactive and purposeful front-end
                    developer with an analytical mind. I have experience
                    working on a project in a team. I'm constantly learning
                    new technologies. Now, I'm studying RTK Query and
                    improving my English level.
                </p></Bounce></AttentionSeeker>
   </div>
          <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>
    )
};

export default Greetings;
