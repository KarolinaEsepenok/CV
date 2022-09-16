import React from 'react';
import Skill from "./components/Skill";
import react from '../img/react.svg'
import s from './Skills.module.css'

const Skills = () => {
    return (
        <div className={s.skillsMain}>
            <Skill nameSkill={'React'} img={react} descriptionSkill={'Подробное написание навыка'} />
            <Skill nameSkill={'React'} img={react} descriptionSkill={'Подробное написание навыка'}/>
            <Skill nameSkill={'React'} img={react} descriptionSkill={'Подробное написание навыка'}/>

        </div>
    );
};

export default Skills;