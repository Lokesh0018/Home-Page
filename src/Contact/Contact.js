import React, { useState } from "react";
import Logo from "../asserts/VFilms Logo.png";
import ContactFooter from "../asserts/Contact Footer.png";

const Contact = () => {
    const [res, setRes] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setRes("");
        const val = document.getElementsByClassName('formLable');
        const data = Array.from(val).map(ele => ele.value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (data[0] === "") {
            setRes("Please enter your name");
            return;
        }
        else if (data[1] === "") {
            setRes("Please enter your email");
            return;
        }
        else if (!emailRegex.test(data[1])) {
            setRes("Please enter a valid email");
            return;
        }
        else if (data[3] === "") {
            setRes("Please enter your message");
            return;
        }
        else {

            fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data[0],
                    email: data[1],
                    phone: data[2],
                    message: data[3]
                })
            }).then(response => {
                if (response.ok) {
                    setRes("Successfully Submitted");
                }
                else {
                    setRes("Something went wrong");
                }
            }).catch(err => setRes(err));
        }
    }
    return (
        <div className="contact">
            <img src={ContactFooter} alt="" className="contactFooter top" />
            <div className="navLogoContainer">
                <img src={Logo} alt="" className="navLogo" />
            </div>
            <div className="contactTxt">
                <p>Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.
                    <br />
                    Let’s catch up over coffee.Great stories always begin with a good conversation</p>
            </div>
            <form className="contactForm">
                <h1 className="formHeader">Join the Story</h1>
                <span className="formCaption">Ready to bring your vision to life? Let’s talk.</span>
                <div className="formContent">
                    <input type="text" placeholder="Your name*" className="formLable" required />
                    <input type="text" placeholder="Your email*" className="formLable" required />
                    <input type="text" placeholder="Phone" className="formLable" />
                    <textarea cols={4} rows={3} placeholder="Your message*" className="formLable desc" required ></textarea>
                    <button type="submit" onClick={handleSubmit} className="formBtn">Submit</button>
                </div>
                <div className="formFooter">
                    <span>vernita@varnanfilms.co.in</span>
                    <hr />
                    <span> +91 98736 84567 </span>
                </div>
                <span className={res === "Successfully Submitted" ? "suc" : "err"}>{res}</span>
            </form>
            <img src={ContactFooter} alt="" className="contactFooter bottom" />
        </div>
    )
}

export default Contact
