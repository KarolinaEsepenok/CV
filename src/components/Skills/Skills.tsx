import React from 'react';
import Skill from "./components/Skill";
import react from '../img/react.jpg'
import s from './Skills.module.css'

const Skills = () => {
    return (


        <div className={s.skillsPage}>
            <h3>My skills</h3>
<div className={s.skills}>
            <Skill nameSkill={'React'}  descriptionSkill={'Подробное написание навыка'} />
            <Skill nameSkill={'React'} descriptionSkill={'Подробное написание навыка'}/>
            <Skill nameSkill={'React'}  descriptionSkill={'Подробное написание навыка'}/>

        </div></div>


    );
};

export default Skills;