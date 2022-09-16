import React from 'react';
import s from './Skill.module.css'
export type SkillsPropsType = {
    img: any
    nameSkill: string
    descriptionSkill: string
}

const Skill = (props: SkillsPropsType) => {
    return (
        <div className={s.skillMain}>
            <div>{props.img}</div>
            <h4>{props.nameSkill}</h4>
            <p>{props.descriptionSkill}</p>

        </div>
    );
};

export default Skill;