import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import s from './App.module.css'
import Greetings from "./components/Greetings/Greetings";




function App(props: any) {
  return (
    <div className={s.mainPages}>
<Header/>
        <Greetings/>

    </div>
  );
}




export default App;
