import React from "react";
import Logo from "../asserts/VFilms Logo.png";
import { ReactComponent as Ul } from "../asserts/UL.svg";
import { ReactComponent as BArrow } from "../asserts/Icon.svg"
import { ReactComponent as Cam1 } from "../asserts/Camera 01.svg";
import { ReactComponent as Cam2 } from "../asserts/Camera 02.svg";
import { ReactComponent as Cam3 } from "../asserts/Camera 03.svg";
import { ReactComponent as Cam4 } from "../asserts/Camera 04.svg";
import Fp from "../asserts/fp.png";
import { NavLink } from "react-router-dom";

const FilmProduction = () => {
    return (
        <div className="filmProduction">
            <div className="navLogoContainer">
                <img src={Logo} alt="" className="navLogo" />
            </div>
            <div className="servicesHeader">
                <p>"Filmmaking is a chance to live many lifetimes." - Robert Altman</p>
                <Ul />
                <NavLink to="/services"><button className="backBtn"><BArrow />Back</button></NavLink>
            </div>
            <div className="servicesCards">
                <div className="servicesCard fp"><img src={Fp} alt="" /><span>Film Production</span></div>
            </div>
            <p className="fpContent">Who says films are just an escape?
                We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.
                V crafts:
                <ul>
                    <li>Documentaries</li>
                    <li>Corporate Videos</li>
                    <li>2D Animation Videos</li>
                    <li>3D Animation Videos </li>
                </ul>
            </p>
            <Cam4 className="cam4" />
            <Cam1 className="cam1" />
            <Cam2 className="cam2" />
            <Cam3 className="cam3" />
        </div>
    )
}

export default FilmProduction;