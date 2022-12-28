import React from 'react';
import Skill from "./components/Skill";
import react from '../assets/img/react.jpg'
import s from './Skills.module.css'
import line from '../assets/img/line.png'
import ts from '../assets/img/ts.svg'
import logoReact from '../assets/img/react.svg'
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import storyBook from '../assets/img/storyBook.svg'
import js from '../assets/img/js.svg'
import reduxLogo from '../assets/img/redux.svg'
import sass from '../assets/img/sass.svg'
import restAPI from '../assets/img/restAPI.svg'
import materialUi from '../assets/img/materiaUi.svg'
import heroku from '../assets/img/heroku.svg'
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div id='skills' className={s.skillsPage}>
           <Title title={'My skills'}/>
            <div className={s.skills}>
                <Skill nameSkill={'React'} descriptionSkill={'Strong React knowledge, both on hook and class-based.'} img={logoReact}/>
                <Skill nameSkill={'TypeScript'} descriptionSkill={'Strong Typescript knowledge.'} img={ts}/>
                <Skill nameSkill={'HTML'} descriptionSkill={'HTML5, DOM, Semantic HTML.'} img={html}/>
                <Skill nameSkill={'CSS'} descriptionSkill={'CSS3. Responsive design. CSS-modules.'} img={css}/>
                <Skill nameSkill={'SASS/SCSS'} descriptionSkill={'Experience in CSS preprocessor like SASS, SCSS.'} img={sass}/>
                <Skill nameSkill={'storyBook'} descriptionSkill={'r'} img={storyBook}/>
                <Skill nameSkill={'JavaScript'} descriptionSkill={'ES6. Solid knowledge of JavaScript. JavaScript ecosystem tools (webpack, npm, yarn).'} img={js}/>
                <Skill nameSkill={'Redux'} descriptionSkill={'Experience in Redux and Redux Thunk.'} img={reduxLogo}/>
                <Skill nameSkill={'Rest API'} descriptionSkill={'Experience in working with RESTful services. Axios.'} img={restAPI}/>
<Skill nameSkill={'Material UI'} descriptionSkill={'Knowledge of UI libraries (Material-UI, Storybook).'} img={materialUi}/>
                <Skill nameSkill={'Heroku'} descriptionSkill={'Experience in servless (Heroku).'} img={heroku}/>
            </div>
        </div>


    );
};

export default Skills;