import React from 'react';
import './App.module.css';

import s from './App.module.css'
import Greetings from "./components/Greetings/Greetings";
import Skills from "./components/Skills/Skills";
import MyWorks from "./components/MyWorks/MyWorks";
import DistantWork from "./components/DistantWork/DistantWork";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";



function App() {
    return (
        <div className={s.mainPages}>
            <div className={s.center}>
                <Header/>
                <Greetings/>
                <Skills/>
                <MyWorks/>
                <DistantWork/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}


export default App;
