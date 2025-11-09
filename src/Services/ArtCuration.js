import React from "react";
import Logo from "../asserts/VFilms Logo.png";
import { ReactComponent as Ul } from "../asserts/UL.svg";
import { ReactComponent as BArrow } from "../asserts/Icon.svg";
import AcImg from "../asserts/ac.png";
import { ReactComponent as Ac1 } from "../asserts/Art Curation Icons 01.svg";
import { ReactComponent as Ac2 } from "../asserts/Art Curation Icons 02.svg";
import { ReactComponent as Ac3 } from "../asserts/Art Curation Icons 03.svg";
import { ReactComponent as Ac4 } from "../asserts/Art Curation Icons 04.svg";
import { NavLink } from "react-router-dom";

const ArtCuration = () => {
    return (
        <div className="artCuration">
            <div className="navLogoContainer">
                <img src={Logo} alt="" className="navLogo" />
            </div>
            <div className="servicesHeader">
                <p>"V take art where it belongs, to the people.” - Vernita Verma</p>
                <Ul />
                <NavLink to="/services"><button className="backBtn"><BArrow />Back</button></NavLink>
            </div>
            <div className="servicesCards">
                <div className="servicesCard fp"><img src={AcImg} alt="" /><span>Film Production</span></div>
            </div>
            <p className="fpContent">Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
                Through every festival, every performance, and every gathering, we help stories find their stage and their people.
                V curates:
                <ul>
                    <li>Art Festivals</li>
                    <li>Live Performances</li>
                    <li>Community Events</li>
                    <li>Cultural Storytelling</li>
                </ul>
            </p>
            <Ac1 className="ac1" />
            <Ac2 className="ac2" />
            <Ac3 className="ac3" />
            <Ac4 className="ac4" />
        </div>
    );
}

export default ArtCuration;