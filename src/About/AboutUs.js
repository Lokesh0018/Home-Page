import React from "react";
import Logo from "../asserts/VFilms Logo.png";
import Card from "../asserts/card.png";
import Brands from "../asserts/brands.png";
import Obj from "../asserts/obj.png"

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="navLogoContainer">
                <img src={Logo} alt="" className="navLogo" />
            </div>
            <span className="aboutUsHeader">A montage of familiar faces and names.</span>
            <span className="aboutUsContent">Some stories come from the biggest names. Others begin with bold, rising voices.
                We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
            </span>
            <img src={Card} alt="" className="aboutUsCard c1" />
            <div className="aboutUsCardContent c1"><span className="cardTop">85+</span><span className="cardBottom">Projects</span></div>
            <img src={Card} alt="" className="aboutUsCard c2" />
            <div className="aboutUsCardContent c2"><span className="cardTop">50+</span><span className="cardBottom">Happy Clients</span></div>
            <img src={Card} alt="" className="aboutUsCard c3" />
            <div className="aboutUsCardContent c3"><span className="cardTop">10+</span><span className="cardBottom">Experts Team</span></div>
            <p className="aboutUsTxt">Every project is more than just a brief - it’s a new chapter waiting to be written.
                Together, we've crafted tales that inspire, connect, and endure.
            </p>
            <img src={Brands} alt="" className="brands"/>
            <img src={Obj} alt="" className="obj"/>
        </div>
    );
}

export default AboutUs;