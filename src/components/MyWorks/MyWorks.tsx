import React from 'react';
import ava from '../img/ava.jpg'
import MyWork from './components/MyWork';
import s from './MyWorks.module.scss';
import line from '../img/line.png';
import todoImage from '../img/tdlist.jpg'
import socialImage from '../img/soc.jpg'
import Title from "../common/components/title/Title";
const MyWorks = () => {
    const social={
        backgroundImg: `url(${socialImage})`
    }
    const todolist={
        backgroundImg: `url(${todoImage})`
    }
    return (
        <div className={s.myWorksPage}>
        <Title title={'My Works'}/>
    <div className={s.myWorkItems}>
        <MyWork style={todolist} title={'Todolist'} description={'vdsbsvdhgskhdgjshgdjh'}/>
                <MyWork style={social} title={'Social network'} description={'vdsbsvdhgskhdgjshgdjh'}/>





            </div>
        </div>
    );
};

export default MyWorks;