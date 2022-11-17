import React from 'react';
import s from "../MyWorks/MyWorks.module.scss";
import line from "../img/line.png";

export type TitlePropsType={
    title:string
}


const Title = (props:TitlePropsType) => {
    return (
        <div className={s.pageImgLine}>
            <img className={s.imageLine} src={line}/>
            <h3 >{props.title}</h3>
        </div>
    );
};

export default Title;