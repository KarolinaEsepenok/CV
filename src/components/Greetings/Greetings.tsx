import React from 'react';
import avatar from '../assets/img/avatar3.jpg'
import s from './Greetings.module.css'
import 'animate.css'
import {ParticlesContainer} from "../Particle/Particles";
import Fade, { AttentionSeeker } from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";




const Greetings = () => {

    return (
        <div className={s.greetings}>
            <div className={s.particles}><ParticlesContainer /></div>
            <div className={s.nameDescrAboutMe}>
            <AttentionSeeker effect={'rubberBand'}><Fade className={s.greetingsAnimate}>
                <h2 className={'animate__lightSpeedInRight'}>Hi!<br/>I'm Karolina.<br/> I'm a Front-end developer.<br/></h2>
            </Fade></AttentionSeeker>
            <p className={s.descrAboutMe}>I'm proactive, responsible and highly-motivated front-end developer with a strong analytical mind.
                I'm improving my skills in React development and expanding them with new technologies. In free time
                I solve Codewars tasks and improve my English (currently A2).</p></div>
          <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>
    )
};

export default Greetings;
