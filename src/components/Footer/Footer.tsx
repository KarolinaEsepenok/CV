import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h3>Каролина Есепёнок</h3>
            <div>
              <a href={'http://onliner.by'}><img/></a>
               <a href={'http://onliner.by'}> <img/></a>
                <a href={'http://onliner.by'}><img/></a>
                <a href={'http://onliner.by'}><img/></a>
            </div>
            <p>&#xa9; 2020, Все права защищены</p>
        </div>
    );
};

export default Footer;