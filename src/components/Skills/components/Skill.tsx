import React from 'react';
import s from './Skill.module.css'
import react from '../../img/react.svg'
export type SkillsPropsType = {
    nameSkill: string
    descriptionSkill: string
    img:string
}

const Skill = (props: SkillsPropsType) => {
    return (
        <div className={s.skillMain}>
            <div>{props.img}</div>
            <h4>{props.nameSkill}</h4>
            <div className={s.descriptionSkill}>{props.descriptionSkill}</div>

        </div>
    );
};

export default Skill;