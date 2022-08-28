import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.linksHeader}>
            <a href={''}>Главная</a>
            <a href={'../Skills/Skills.tsx'}>Скиллы</a>
            <a href={'../MyWorks/MyWorks.tsx'}>Работы</a>
            <a href={'../Contacts/Contacts.tsx'}>Контакты</a>
        </div>
    );
};

export default Header;