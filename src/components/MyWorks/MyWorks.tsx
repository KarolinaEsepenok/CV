import React from 'react';
import MyWork from './components/MyWork';
import s from './MyWorks.module.scss';
import todoImage from '../assets/img/tdlist.jpg'
import socialImage from '../assets/img/soc.jpg'
import cardsImg from '../assets/img/cards.jpg'
import sellImage from '../assets/img/selling.jpeg'
import Title from "../common/components/title/Title";
import {AttentionSeeker, Reveal} from "react-awesome-reveal";

const MyWorks = () => {
    const cards = {
    backgroundImg: `url(${cardsImg})`
}
    const social = {
        backgroundImg: `url(${socialImage})`
    }
    const todolist = {
        backgroundImg: `url(${todoImage})`
    }
    const selling = {
        backgroundImg: `url(${sellImage})`
    }

    return (
        <div id={'myWorks'} className={s.myWorksPage}>
            <Title title={'My Works'}/>
            <AttentionSeeker effect={'pulse'}><Reveal cascade duration={1300}>
                <div className={s.myWorkItems}>
                    <MyWork href={'https://karolinaesepenok.github.io/samuraiWay/'} style={social}
                            title={'Social network'}
                            description={'Use a dedicated online platform to maintain contact, interact and collaborate with like-minded individuals and peers.'}/>
                    <MyWork title={'Landing page'} description={'This is a landing page for women\'s clothing.'} style={selling} href={'https://karolinaesepenok.github.io/projectThird/'}/>
                    <MyWork href={'https://karolinaesepenok.github.io/cards/'} style={cards}
                                                       title={'Cards'}
                                                       description={'Flashcards are a great tool when you want to memorize a new topic or learn a new language. Stack technologies: React (Functional Components), Redux-Tookit, TypeScript, JS, Axios, Formik, React-Router-dom (V6).'}/>
                </div>
            </Reveal></AttentionSeeker>
        </div>
    );
};

export default MyWorks;