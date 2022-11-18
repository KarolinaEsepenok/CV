import React from 'react';
import s from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={s.contact}><p>Contacts</p>
           <form className={s.formMain}>
               <input type={'text'}/>
               <input type={'text'}/>
               <textarea>

               </textarea>

           </form>
            <button type={'submit'} className={s.submitBtn}>Send</button>
        </div>
    );
};

export default Contacts;