import React from 'react';
import ava from '../assets/img/ava.jpg'
import MyWork from './components/MyWork';
import s from './MyWorks.module.scss';
import line from '../assets/img/line.png';
import todoImage from '../assets/img/tdlist.jpg'
import socialImage from '../assets/img/soc.jpg'
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
        <MyWork style={todolist} title={'Todolist'} description={'It’s a list of tasks you need to complete or things that you want to do. Traditionally, they’re written on a piece of paper or post it notes and act as a memory aid. As technology has evolved we have been able to create a todo list apps. You can use a to do list in your home and personal life, or in the workplace.'}/>
                <MyWork style={social} title={'Social network'} description={'Use a dedicated online platform to maintain contact, interact and collaborate with like-minded individuals and peers.'}/>





            </div>
        </div>
    );
};

export default MyWorks;