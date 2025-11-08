import React from "react";
import Logo from "../asserts/VFilms Logo.png";
import ContactFooter from "../asserts/Contact Footer.png";

const Contact = () => {
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
                    <input type="text" placeholder="Your name*" className="formLable" />
                    <input type="text" placeholder="Your email*" className="formLable" />
                    <input type="text" placeholder="Phone" className="formLable" />
                    <textarea cols={4} rows={3} placeholder="Your message*" className="formLable desc" ></textarea>
                    <button className="formBtn">Submit</button>
                </div>
                <div className="formFooter">
                    <span>vernita@varnanfilms.co.in</span>
                    <hr />
                    <span> +91 98736 84567 </span>
                </div>
            </form>
            <img src={ContactFooter} alt="" className="contactFooter bottom" />
        </div>
    )
}

export default Contact
