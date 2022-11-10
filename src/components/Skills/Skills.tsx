import React from 'react';
import Skill from "./components/Skill";
import react from '../img/react.jpg'
import s from './Skills.module.css'
import line from '../img/line.png'
import ts from '../img/ts.svg'
import logoReact from '../img/react.svg'
import html from '../img/html.svg'
import css from '../img/css.svg'
import storyBook from '../img/storyBook.svg'
import js from '../img/js.svg'
import reduxLogo from '../img/redux.svg'

const Skills = () => {
    return (


        <div className={s.skillsPage}>
            <img className={s.skillPageImgLine} src={line}/>
            <h3 className={s.skillPageName}>My skills</h3>
<div className={s.skills}>
    <div className={s.skillMain}>
        <img src={logoReact} alt={'React'} title={'React'}/>
        <h4>React</h4>

    </div>
    <div className={s.skillMain}>
        <img src={ts} alt={'TypeScript'} title={'TypeScript'}/>
        <h4>TypeScript</h4>

    </div>
    <div className={s.skillMain}>
        <img src={html} alt={'HTML'} title={'HTML'} />
        <h4>HTML</h4>

    </div>
    <div className={s.skillMain}>
        <img src={css}  alt={'CSS'} title={'CSS'}/>
        <h4>CSS</h4>

    </div>
    <div className={s.skillMain}>
        <img src={storyBook}  alt={'storyBook'} title={'storyBook'}/>
        <h4>Storybook</h4>

    </div>
    <div className={s.skillMain}>
        <img src={js}  alt={'JavaScript'} title={'JavaScript'}/>
        <h4>JavaScript</h4>

    </div>
    <div className={s.skillMain}>
        <img src={reduxLogo}  alt={'Redux'} title={'Redux'}/>
        <h4>Redux-Toolkit</h4>

    </div>

</div></div>



    );
};

export default Skills;