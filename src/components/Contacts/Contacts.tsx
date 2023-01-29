import React, {useEffect, useRef, useState} from 'react';
import s from './Contacts.module.scss'
import emailjs from '@emailjs/browser'

const Contacts = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const sendEmail = (e:any) => {
        e.preventDefault()
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    useEffect(()=>{
        if(form.current){
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            emailjs.sendForm('service_rfu75tm','template_trkuazi',form.current,'fYLlGpL8DB4s59SmU')
                .then((result) =>{

                }),(error:any)=>{

            }
        }
    }, [])



    return (

        <div className={s.contact}><p>Contacts</p>
            <form ref={form} onSubmit={sendEmail} className={s.formMain} >
                <input type={'text'} className={s.formArea} placeholder={'name'}
                       />
                <input type={'text'} className={s.formArea} placeholder={'E-mail'}
                      />
                <textarea className={s.messageArea} placeholder={'Message'}
                      />
                <button type={'submit'}className={s.submitBtn}>Send</button>
            </form>

        </div>
    );
};

export default Contacts;