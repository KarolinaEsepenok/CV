import React from 'react';
import s from './Skill.module.css'
import react from '../../img/react.svg'
export type SkillsPropsType = {

    nameSkill: string
    descriptionSkill: string
}

const Skill = (props: SkillsPropsType) => {
    return (
        <div className={s.skillMain}>
            <img src={react}/>
            <h4>{props.nameSkill}</h4>
            <p>{props.descriptionSkill}</p>

        </div>
    );
};

export default Skill;