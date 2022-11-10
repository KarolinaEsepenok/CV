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
        <img src={logoReact}/>
        <h4>React</h4>
        <div className={s.descriptionSkill}>описание навыка</div>
    </div>
    <div className={s.skillMain}>
        <img src={ts}/>
        <h4>TypeScript</h4>
        <div className={s.descriptionSkill}>описание навыка</div>
    </div>
    <div className={s.skillMain}>
        <img src={html}/>
        <h4>HTML</h4>
        <div className={s.descriptionSkill}>описание навыка</div>
    </div>
    <div className={s.skillMain}>
        <img src={css}/>
        <h4>CSS</h4>
        <div className={s.descriptionSkill}>описание навыка</div>
    </div>
    <div className={s.skillMain}>
        <img src={storyBook}/>
        <h4>Storybook</h4>
        <div className={s.descriptionSkill}>описание навыка</div>
    </div>
    <div className={s.skillMain}>
        <img src={js}/>
        <h4>JavaScript</h4>
        <div className={s.descriptionSkill}>описание навыка</div>
    </div>
    <div className={s.skillMain}>
        <img src={reduxLogo}/>
        <h4>Redux-Toolkit</h4>
        <div className={s.descriptionSkill}>описание навыка</div>
    </div>

</div></div>



    );
};

export default Skills;