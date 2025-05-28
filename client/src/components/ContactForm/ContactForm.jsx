import { useState } from "react";
import './ContactForm.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

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

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/messages`, {
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
        <div className="contact-form-body" id="contactform">
            <div className="contact-form-container">
                <div className="contact-form-box">
                    <div className="left">
                    </div>
                    <div className="right">
                        <h2>Request a Callback</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="field" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                            <input type="email" className="field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <div className="phone-input-container">
                                <PhoneInput
                                country={"ae"}
                                value={phone}
                                onChange={(phone) => { if (phone.length <=15) setPhone(phone)}}
                                containerClass="phone-field"
                                buttonClass="phone-dropdown"
                                buttonStyle={{
                                    border:"none",
                                    width:"40px"
                                }}
                                inputClass="phone-input"
                                inputStyle={{
                                    borderRadius:"none"
                                }}
                                required pattern="[0-9]{10,11}" title="Please enter a valid phone number"
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                }}
                                placeholder="Phone Number"
                                />
                            </div>
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
