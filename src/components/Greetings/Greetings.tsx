import React from 'react';
import avatar from '../assets/img/avatar3.jpg'
import s from './Greetings.module.css'
import 'animate.css'
import {ParticlesContainer} from "../Particle/Particles";
import Fade, {AttentionSeeker, Bounce, Zoom} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from "react-typing-effect";
import Typewriter from "react-ts-typewriter";




const Greetings = () => {

    return (
        <div id={'main'} className={s.greetings}>
            <div className={s.particles}><ParticlesContainer /></div>
            <div className={s.nameDescrAboutMe}>
            <AttentionSeeker  effect={'swing'}><Fade className={s.greetingsAnimate}>
                <h2 className={'animate__lightSpeedInRight'}>Hi!<br/>I'm Karolina.<br/> I'm a Front-end developer.<br/></h2>
            </Fade></AttentionSeeker>
                <AttentionSeeker effect={'headShake'}><Bounce><p className={s.descrAboutMe}>I'm proactive, responsible and highly-motivated front-end developer with a strong analytical mind.
                    I'm improving my skills in React development and expanding them with new technologies. In free timeБ I solve Codewars tasks and improve my English (currently A2).
                </p></Bounce></AttentionSeeker>
   </div>
          <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>
    )
};

export default Greetings;
