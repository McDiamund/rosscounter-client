import './support.css'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Support() {

    const validator = require("email-validator");
    const form = useRef();
    const [notification, setNotification] = useState('');
    const [error, setError] = useState('');

    const submitReport = async (e) => {
        e.preventDefault();

        const name = form.current["user_name"].value;
        const email = form.current["user_email"].value;
        const message = form.current["message"].value;

        if (name.length === 0 && message.length === 0) {
            setError("Please input a name and a message.")
            return;
        }
        else if (name.length === 0) {
            setError("Please input a name.")
            return;
        }
        else if (message.length === 0) {
            setError("Please input a message.")
            return;
        }
        else if (!validator.validate(email)) {
            setError("Please input a valid email")
            return;
        }

        const response = await fetch("http://localhost:5000/email").catch((error) => {return error});

        if (response.message === "Failed to fetch") {
            setError("Your IP is blocked from sending emails for 15 minutes");
            return;
        }
            
    
        setError('');
        emailjs.sendForm('service_2maiw0l', 'template_3uftizq', form.current, 'rizUI_PjidbU9Tsak')
            .then((result) => {
                if (result.text === 'OK')
                    setNotification("Message Sent!");
            },
            (error) => {
                setError(error.text);
            })
       
    }

    return(
        <div className="support-module">
            <div className="support-info">
                <h1 className="support-title jb-mono">Report Misconduct</h1>

                { notification === '' ?  <></> : <div className='notification'><p className='dinpro'>{notification}</p></div>}
                { error === '' ?  <></> : <div className='error'><p className='dinpro'>{error}</p></div>}

                <form className="s-form" ref={form} onSubmit={submitReport}>
                    <label className="dinpro" htmlFor="user_name">Name:</label><br/>
                    <input 
                            type="text" 
                            className="s-input dinpro" 
                            name="user_name"/><br/>
                    <label className="dinpro" htmlFor="user_email">Email:</label><br/>
                    <input 
                            type="text" 
                            className="s-input dinpro" 
                            name="user_email" /><br/>
                    <label className="dinpro"  htmlFor="message">Message:</label><br/>
                    <textarea 
                            className="s-input dinpro" 
                            name="message" 
                            rows="5" 
                            cols="50" 
                            maxLength="150"></textarea>
                    <button 
                            className="s-submit"
                            type="submit">Submit Report</button>
                </form>
            </div>
        </div>
    )
}