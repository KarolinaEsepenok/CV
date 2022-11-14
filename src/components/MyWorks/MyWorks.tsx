import React from 'react';
import ava from '../img/ava.jpg'
import MyWork from './components/MyWork';
import s from './MyWorks.module.css';
import line from '../img/line.png';
import todoImage from '../img/tdlist.jpg'
import socialImage from '../img/soc.jpg'
const MyWorks = () => {
    const social={
        backgroundImg: `url(${socialImage})`
    }
    const todolist={
        backgroundImg: `url(${todoImage})`
    }
    return (
        <div className={s.myWorksPage}>
         <div>  <img className={s.skillPageImgLine} src={line}/>
            <h3 className={s.myWorkPageName}>My Works</h3></div>
    <div className={s.myWorkItems}>
        <MyWork style={todolist} title={'Todolist'} description={'vdsbsvdhgskhdgjshgdjh'}/>
                <MyWork style={social} title={'Social network'} description={'vdsbsvdhgskhdgjshgdjh'}/>





            </div>
        </div>
    );
};

export default MyWorks;