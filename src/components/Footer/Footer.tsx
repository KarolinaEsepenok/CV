import React from 'react';
import s from './Footer.module.css'
import viber from '../img/viber.svg'
import telegram from '../img/tele.svg'
import instagram from '../img/ins.svg'
import linked from '../img/link.svg'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h3>Karolina Esepenok</h3>
            <div className={s.footerSocial}>
              <a href={'viber://add?number=375297190383'}><img src={viber}/></a>
               <a href={'https://t.me/karolinaesepenok'}> <img src={telegram}/></a>
                <a href={'http://instagram.com/karolinochka_smile'}><img src={instagram}/></a>
                <a href={'https://www.linkedin.com/in/%D0%BA%D0%B0%D1%80%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B5%D1%81%D0%B5%D0%BF%D1%91%D0%BD%D0%BE%D0%BA-a74084236/'}><img src={linked}/></a>
            </div>
            <p>&#xa9; 2022, Все права защищены</p>
        </div>
    );
};

export default Footer;