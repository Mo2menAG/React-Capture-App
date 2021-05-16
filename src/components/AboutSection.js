import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
    return(
        <div>
            <div className="describtion">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>Dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photoghrapy ideas that you have. We have amazing skills.</p>
            </div>
            <div className="image">
                <img src={home1} alt="Guy with a camera" />
            </div>
        </div>
    );
};

export default AboutSection;