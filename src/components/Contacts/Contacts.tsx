import React from 'react';
import s from './Contacts.module.scss'

import {AttentionSeeker} from "react-awesome-reveal";

const Contacts = () => {
    return (
        <AttentionSeeker effect={'pulse'}>
        <div className={s.contact}><p>Contacts</p>

           <form className={s.formMain}>
               <input type={'text'} className={s.formArea} placeholder={'Name'}/>
               <input type={'text'}className={s.formArea} placeholder={'E-mail'}/>
               <textarea  className={s.messageArea} placeholder={'Message'} />
               <button type={'submit'} className={s.submitBtn}>Send</button>
           </form>

        </div></AttentionSeeker>
    );
};

export default Contacts;