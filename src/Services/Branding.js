import React from "react";
import Logo from "../asserts/VFilms Logo.png";
import { ReactComponent as Ul } from "../asserts/UL.svg";
import { ReactComponent as BArrow } from "../asserts/Icon.svg";
import Bimg from "../asserts/b.png";
import { ReactComponent as Br1 } from "../asserts/Branding Vector 01.svg";
import { ReactComponent as Br2 } from "../asserts/Branding Vector 02.svg";
import { ReactComponent as Br3 } from "../asserts/Branding Vector 03.svg";
import { ReactComponent as Br4 } from "../asserts/Branding Vector 04.svg";
import { NavLink } from "react-router-dom";

const Branding = () => {
    return (
        <div className="branding">
            <div className="navLogoContainer">
                <img src={Logo} alt="" className="navLogo" />
            </div>
            <div className="servicesHeader">
                <p>A brand is a voice, and a product is a souvenir." - Lisa Gansky</p>
                <Ul />
                <NavLink to="/services"><button className="backBtn"><BArrow />Back</button></NavLink>
            </div>
            <div className="servicesCards">
                <div className="servicesCard fp"><img src={Bimg} alt="" /><span>Film Production</span></div>
            </div>
            <p className="fpContent">A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
                We shape brands that people remember, return to, and fall in love with.
                V creates:
                <ul>
                    <li>Branding & Communication</li>
                    <li>Market Mapping</li>
                    <li>Content Management</li>
                    <li>Social Media Management</li>
                    <li>Rebranding</li>
                </ul>
            </p>
            <Br1 className="br1" />
            <Br2 className="br2" />
            <Br3 className="br3" />
            <Br4 className="br4" />
        </div>
    );
}

export default Branding;