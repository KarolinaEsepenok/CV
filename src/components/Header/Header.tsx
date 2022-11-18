import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.linksHeader}>
            <a href={''}>Main</a>
            <a href={'../Skills/Skills.tsx'}>Skills</a>
            <a href={'../MyWorks/MyWorks.tsx'}>Works</a>
            <a href={'../Contacts/Contacts.tsx'}>Contacts</a>
        </div>
    );
};

export default Header;