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
import Title from "../common/Title";

const Skills = () => {
    return (
        <div className={s.skillsPage}>
           <Title title={'My skills'}/>
            <div className={s.skills}>
                <Skill nameSkill={'React'} descriptionSkill={'r'} img={logoReact}/>
                <Skill nameSkill={'TypeScript'} descriptionSkill={'r'} img={ts}/>
                <Skill nameSkill={'HTML'} descriptionSkill={'r'} img={html}/>
                <Skill nameSkill={'CSS'} descriptionSkill={'r'} img={css}/>
                <Skill nameSkill={'storyBook'} descriptionSkill={'r'} img={storyBook}/>
                <Skill nameSkill={'JavaScript'} descriptionSkill={'r'} img={js}/>
                <Skill nameSkill={'Redux'} descriptionSkill={'r'} img={reduxLogo}/>

            </div>
        </div>


    );
};

export default Skills;