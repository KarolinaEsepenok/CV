import React from 'react';
import ava from '../assets/img/ava.jpg'
import MyWork from './components/MyWork';
import s from './MyWorks.module.scss';
import line from '../assets/img/line.png';
import todoImage from '../assets/img/tdlist.jpg'
import socialImage from '../assets/img/soc.jpg'
import Title from "../common/components/title/Title";
import Fade, {AttentionSeeker, Reveal} from "react-awesome-reveal";
const MyWorks = () => {
    const social={
        backgroundImg: `url(${socialImage})`
    }
    const todolist={
        backgroundImg: `url(${todoImage})`
    }
    return (
        <div id={'myWorks'} className={s.myWorksPage}>
        <Title title={'My Works'}/>
            <AttentionSeeker effect={'pulse'} ><Reveal cascade duration={1300}  >
    <div className={s.myWorkItems}>
        <MyWork href={''} style={todolist} title={'Todolist'} description={'It’s a list of tasks you need to complete or things that you want to do. Traditionally, they’re written on a piece of paper or post it notes and act as a memory aid. As technology has evolved we have been able to create a todo list apps. You can use a to do list in your home and personal life, or in the workplace.'}/>
                <MyWork href={'https://karolinaesepenok.github.io/samuraiWay/'} style={social} title={'Social network'} description={'Use a dedicated online platform to maintain contact, interact and collaborate with like-minded individuals and peers.'}/>
            </div></Reveal></AttentionSeeker>
        </div>
    );
};

export default MyWorks;