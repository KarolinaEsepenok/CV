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
                <Skill nameSkill={'React'}  img={logoReact}/>
                <Skill nameSkill={'TypeScript'}  img={ts}/>
                <Skill nameSkill={'HTML'}  img={html}/>
                <Skill nameSkill={'CSS'}  img={css}/>
                <Skill nameSkill={'SASS/SCSS'}  img={sass}/>
                <Skill nameSkill={'StoryBook'} img={storyBook}/>
                <Skill nameSkill={'JavaScript'} img={js}/>
                <Skill nameSkill={'Redux'}  img={reduxLogo}/>
                <Skill nameSkill={'Rest API'}img={restAPI}/>
<Skill nameSkill={'Material UI'} img={materialUi}/>
                <Skill nameSkill={'Heroku'} img={heroku}/>
            </div>
        </div>


    );
};

export default Skills;
{/*



        <div id='skills' className={s.skillsPage}>
           <Title title={'My skills'}/>
            <div className={s.skills}>
                <Skill nameSkill={'React'} descriptionSkill={'Used React library for developing UI of SPA. '} img={logoReact}/>
                <Skill nameSkill={'TypeScript'} descriptionSkill={'Used TypeScript for developing easily scalable and sustainable application.'} img={ts}/>
                <Skill nameSkill={'HTML'} descriptionSkill={'HTML5, DOM, Semantic HTML.'} img={html}/>
                <Skill nameSkill={'CSS'} descriptionSkill={'CSS3. Responsive design. CSS-modules.'} img={css}/>
                <Skill nameSkill={'SASS/SCSS'} descriptionSkill={'Experience in CSS preprocessor like SASS, SCSS.'} img={sass}/>
                <Skill nameSkill={'storyBook'} descriptionSkill={'r'} img={storyBook}/>
                <Skill nameSkill={'JavaScript'} descriptionSkill={'Experienced in using ES6 features, such as Promises, Classes, Destructuring assignment, Arrow functions etc.'} img={js}/>
                <Skill nameSkill={'Redux'} descriptionSkill={'Implemented Redux for state management of app as BLL. Created reducers for immutable state modification, and used Thunk middleware for asynchronous network requests.'} img={reduxLogo}/>
                <Skill nameSkill={'Rest API'} descriptionSkill={'Developed data access layer (DAL) for interaction with RESTful web services by using Axios library.'} img={restAPI}/>
<Skill nameSkill={'Material UI'} descriptionSkill={'Used Material UI for app development with styles and design out of a box.'} img={materialUi}/>
                <Skill nameSkill={'Heroku'} descriptionSkill={'Experience in servless (Heroku).'} img={heroku}/>
            </div>
        </div>



*/}