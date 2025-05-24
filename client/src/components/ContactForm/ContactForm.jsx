import React, { useState } from "react";
import './ContactForm.css';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            message,
        };

        const res = await fetch("http://localhost:5000/api/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setSuccessMsg("Message sent successfully")
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");

            setTimeout(() => setSuccessMsg(""), 4000);
        } else {
            setSuccessMsg("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="contact-form-body">
            <div className="contact-form-container">
                <div className="contact-form-box">
                    <div className="left">
                    </div>

                    <div className="right">

                        <h2>Contact Us</h2>

                        <form onSubmit={handleSubmit}>

                            <input type="text" className="field" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>

                            <input type="email" className="field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <input type="text" className="field" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="[0-9]{10,11}" title="Please enter a valid phone number" />

                            <textarea className="field area" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

                            <button className="btn" type="submit">Send</button>

                        </form>

                        {successMsg && <p className="success-msg"> {successMsg} </p>} 

                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ContactForm;
