import React, {useEffect, useRef, useState} from 'react';
import s from './Contacts.module.scss'
import emailjs from '@emailjs/browser'

const Contacts = () => {
    {/* const form = useRef<HTMLFormElement | null>(null)

    const sendEmail = (e:any) => {
        e.preventDefault()
        if(form.current){
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            emailjs.sendForm('service_rfu75tm','template_trkuazi',form.current,'fYLlGpL8DB4s59SmU')
                .then((result) =>{
                }),(error:any)=>{
            }
        }
        e.target.reset()
    }*/}
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [regex, setRegex] = useState('')

    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_rfu75tm', 'template_trkuazi', form.current, 'fYLlGpL8DB4s59SmU')
            .then((result) => {
                // alert(result.text);
                setModalSuccess(true)
            }, (error) => {
                // alert(error.text);
                setModalError(true)
            });
        e.target.reset()
    };

    setTimeout(() => {
        setModalSuccess(false)
        setModalError(false)
    }, 4000);

    return (
        <div className={s.contact}>
            <p>Contacts</p>
            {modalSuccess && <div className={s.modal_success}>{'Your message has been successfully sent!'}</div>}
            {modalError && <div className={s.modal_error}>{'something went wrong. :(('}</div>}

            <form ref={form} onSubmit={sendEmail} className={s.formMain} >
                <input type={'text'} className={s.formArea} placeholder={'name'} name={'name'}
                       />
                <input type={'email'} value={regex}
                       onChange={(e) => setRegex(e.currentTarget.value)}
                       className={s.formArea} placeholder={'E-mail'} name={'email'}
                      />
                <textarea className={s.messageArea} placeholder={'Message'}
                      />
                <button type={'submit'}className={s.submitBtn}>Send</button>
            </form>

        </div>
    );
};

export default Contacts;