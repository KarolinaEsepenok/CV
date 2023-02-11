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
                <AttentionSeeker effect={'headShake'}><Bounce><p className={s.descrAboutMe}>I'm driven, efficient, forward-thinking and full of vim and
                    vigor front-end developer with an analytical mind. I'm
                    team player. I'm improving my hard and soft skills and
                    English. I'm learning RTK Query and Node.js now.
                    Open to your suggestions

                </p></Bounce></AttentionSeeker>
   </div>
          <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>
    )
};

export default Greetings;
