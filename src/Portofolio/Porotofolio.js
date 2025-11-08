import React from "react";
import Logo from "../asserts/VFilms Logo.png";
import Cam from "../asserts/Cam Group.png";
import VideoPlayer from "../asserts/Group 11.png";
import Thumbnail from "../asserts/Thumbnail.png";
import PortFooter from "../asserts/Port Footer.png";

const Porotofolio = () => {
    return (
        <div className="porotofolio">
            <div className="navLogoContainer">
                <img src={Logo} alt="" className="navLogo" />
            </div>
            <div className="portHeader">The Highlight Reel</div>
            <div className="portCaption">Watch the magic we’ve captured.</div>
            <img src={Cam} alt="" className="portCam"/>
            <div className="vidPlayerContainer">
            <img src={VideoPlayer} alt="" className="vidPlayer" />
            <span src={Thumbnail} alt="" className="thumbnail" />
            </div>
            <img src={PortFooter} alt="" className="portFooter" />
        </div>
    )
}

export default Porotofolio;