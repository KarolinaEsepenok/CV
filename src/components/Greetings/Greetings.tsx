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
                loaded={particlesLoaded}  options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 1.2,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} />
            );
          <h2 className={'animate__lightSpeedInRight'}>Hi!<br/>I'm Karolina.<br/>I'm a Front-end developer</h2>
 <img src={avatar} alt={'Avatar'} title={'Karolina Esepenok'}/>
        </div>

    )
};

export default Greetings;