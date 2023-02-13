import React, {useEffect, useState} from 'react';
import s from './Contacts.module.scss'

import axios from "axios";
import {useFormik} from "formik";


interface FormikErrorType {
    email?: string

}
const Contacts = (className:any,
                  disabled:any,) => {
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
    }
    const [regex, setRegex] = useState('')

    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_rfu75tm', 'template_trkuazi', form.current, 'fYLlGpL8DB4s59SmU')
            .then((result) => {
                // alert(result.text);

            }, (error) => {
                // alert(error.text);

            });
        e.target.reset()
    };*/}


    const [isLoading, setIsloading] = useState(false)
    const finalClassName = s.submitBtn
        + (disabled ? ' ' + s.disabled : '')
        + (className ? ' ' + className : '')

    const formik = useFormik({
        initialValues: {
            name: '', email: '', subject: '', message: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}

            if (!values.email) {
                errors.email = 'Email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.name) {
                return {
                    name: 'Please, enter your name'
                }
            }
            if (!values.message) {
                return {
                    message: 'Please, enter your message'
                }
            }


            return errors
        },onSubmit: (values, {resetForm}) => {
            setIsloading(true)


            axios.post("https://back-portfolio-neon.vercel.app/", {
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message
            })
                .then(() => {
                    alert("Your message has been sent! Thanks for your interest. I will definitely contact you when I have time.")
                    resetForm()
                })
                .catch(() => {
                    alert("Something went wrong... Your message hasn't been sent! Please try again.")
                })
                .finally(() => {
                    setIsloading(false)
                })
        },
    });


    return (
        <div className={s.contact}>
            <p>Contacts</p>
            <form autoComplete={'off'} onSubmit={formik.handleSubmit} className={s.formMain} >
                <input type={'text'} className={s.formArea} placeholder={'Your name'}
                       {...formik.getFieldProps("name")}
                       />{formik.errors.name ? <div className={s.formError}>{formik.errors.name}</div> : null}
                <input  type={'email'}
                       className={s.formArea} placeholder={'Your Email'}
                       disabled={isLoading}
                       {...formik.getFieldProps("email")}
                      /> {formik.errors.email ? <div className={s.formError}>{formik.errors.email}</div> : null}
                <input type="text" disabled={isLoading} placeholder="Your subject"
                       className={s.formArea}
                        {...formik.getFieldProps("subject")}/>
                <textarea disabled={isLoading} className={s.messageArea} placeholder={'Your message'}
                      {...formik.getFieldProps("message")}
                />{formik.errors.message ? <div className={s.formError}><p className={s.error}>{formik.errors.message}</p></div> : null}
                <button disabled={
                    !!formik.errors.email || !!formik.errors.name || !formik.values.message
                }type={'submit'} className={finalClassName}>Send</button>
            </form>

        </div>
    );
};

export default Contacts;