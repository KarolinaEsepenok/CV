import React from 'react';
import s from './Footer.module.scss'
import viber from '../assets/img/viber.svg'
import telegram from '../assets/img/tele.svg'
import instagram from '../assets/img/ins.svg'
import linked from '../assets/img/link.svg'
import Title from "../common/components/title/Title";

const Footer = () => {
    return (
        <div className={s.footer}>
            <p>Karolina Esepenok</p>
            <div className={s.footerSocial}>
              <a href={'https://github.com/KarolinaEsepenok'}><img src={viber}/></a>
               <a href={'https://t.me/karolinaesepenok'}><img src={telegram}/></a>
                <a href={'http://instagram.com/karolinochka_smile'}><img src={instagram}/></a>
                <a href={'https://www.linkedin.com/in/%D0%BA%D0%B0%D1%80%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B5%D1%81%D0%B5%D0%BF%D1%91%D0%BD%D0%BE%D0%BA-a74084236/'}><img src={linked}/></a>
            </div>
            <p>&#xa9; 2022, Все права защищены</p>
        </div>
    );
};

export default Footer;