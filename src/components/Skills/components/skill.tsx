import React from 'react';

const Skill = () => {
    return (
        <div>
            <div>{props.img}</div>
            <h4>{props.nameSkill}</h4>
            <p>{props.descriptionSkill}</p>

        </div>
    );
};

export default Skill;