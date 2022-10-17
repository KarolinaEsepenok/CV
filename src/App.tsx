import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import s from './App.module.css'
import Greetings from "./components/Greetings/Greetings";
import Skills from "./components/Skills/Skills";
import MyWorks from "./components/MyWorks/MyWorks";
import DistantWork from "./components/DistantWork/DistantWork";


function App(props: any) {
    return (
        <div className={s.mainPages}>
            <div className={s.center}>
                <Header/>
                <Greetings/>
                <Skills/>
                <MyWorks/>
                <DistantWork/>
            </div>
        </div>
    );
}


export default App;
