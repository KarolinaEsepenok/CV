import React, {useCallback} from 'react';
import avatar from '../assets/img/avatar3.jpg'
import s from './Greetings.module.css'
import 'animate.css'
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
// @ts-ignore
import { loadFull } from "tsparticles";



const Greetings = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (

        <div className={s.greetings}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded} />
            );
          <h2 className={'animate__lightSpeedInRight'}>Hi!<br/>I'm Karolina.<br/>I'm a Front-end developer</h2>
 <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>

    )
};

export default Greetings;