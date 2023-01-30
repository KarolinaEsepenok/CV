import React, {useState} from 'react';
import s from './Contacts.module.scss'

import axios from "axios";
import {useFormik} from "formik";

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

    const formik = useFormik({
        initialValues: {
            name: '', email: '', subject: '', message: ''
        }, onSubmit: (values, {resetForm}) => {
            setIsloading(true)

            axios.post("https://back-portfolio-neon.vercel.app/", {
                name: values.name, email: values.email, subject: values.subject, message: values.message
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
            <form onSubmit={formik.handleSubmit} className={s.formMain} >
                <input type={'text'} className={s.formArea} placeholder={'Your name'}
                       {...formik.getFieldProps("name")}
                       />
                <input type={'email'}
                       className={s.formArea} placeholder={'Your Email'}

                       {...formik.getFieldProps("email")}
                      />
                <input type="text" placeholder="Your subject" disabled={isLoading}
                       className={s.formArea}
                        {...formik.getFieldProps("subject")}/>
                <textarea className={s.messageArea} placeholder={'Your message'}
                      {...formik.getFieldProps("message")}
                      />
                <button type={'submit'}className={s.submitBtn}>Send</button>
            </form>

        </div>
    );
};

export default Contacts;