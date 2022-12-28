import React from 'react';
import s from "../title/Title.module.scss";
import line from "../../../assets/img/line.png";

export type TitlePropsType={
    title:string
}


const Title = (props:TitlePropsType) => {
    return (
        <div className={s.pageImgLine}>
            <img className={s.imageLine} src={line}/>
            <p >{props.title}</p>
        </div>
    );
};

export default Title;