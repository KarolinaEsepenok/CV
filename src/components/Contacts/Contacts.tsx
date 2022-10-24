import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contact}><h3>Контакты</h3>
           <form className={s.formMain}>
               <input/>
               <input/>
               <textarea></textarea>

           </form>
            <button>Отправитьь</button>
        </div>
    );
};

export default Contacts;