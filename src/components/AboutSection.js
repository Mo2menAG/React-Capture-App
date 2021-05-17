import React from "react";
//section png
import home1 from "../img/home1.png";
//styled
//import styled from "styled-components";
import {About, Image, Hide, Describtion} from "../styles"

const AboutSection = () => {
    return(
        <About> 
            <Describtion>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>Dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photoghrapy ideas that you have. We are professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Describtion>
            <Image>
                <img src={home1} alt="Guy with a camera" />
            </Image>
        </About>
    );
};

export default AboutSection;