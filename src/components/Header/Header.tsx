import React from 'react';
import s from './Header.module.css'
import {Link} from "react-scroll";


const Header = () => {
    return (
        <div className={s.linksHeader}>
            <Link activeClass={s.active} to='main'spy={true} smooth={true} offset={1} duration={500}>Main</Link>
            <Link activeClass={s.active}  to='skills' spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
            <Link activeClass={s.active}  to='myWorks' spy={true} smooth={true} offset={-50} duration={500}>Works</Link>
            <Link activeClass={s.active}  to='contacts' spy={true} smooth={true} offset={0} duration={500}>Contacts</Link>
        </div>
    );
};

export default Header;