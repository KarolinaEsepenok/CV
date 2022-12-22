import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.linksHeader}>
            <a href={''}>Main</a>
            <a href={'#skills'}>Skills</a>
            <a href={'#myWorks'}>Works</a>
            <a href={'#contacts'}>Contacts</a>
        </div>
    );
};

export default Header;