import React from "react";
//section png
import home1 from "../img/home1.png";

//component
import Wave from "./Wave";
import { Link } from "react-router-dom";

//styled
//import styled from "styled-components";
import { About, Image, Hide, Describtion } from "../styles";

//framer motion
import { motion } from "framer-motion";
import { titleAnimation, fade } from "../animation";
import styled from "styled-components";

const AboutSection = () => {
    return (
        <About>
            <Describtion>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            your <span>Dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>
                    Contact us for any photoghrapy ideas that you have. We are
                    professionals with amazing skills.
                </motion.p>
                <Button variants={fade}>
                    <Link to="/contact">Contact Us</Link>
                </Button>
            </Describtion>
            <Image>
                <img src={home1} alt="Guy with a camera" />
            </Image>
            <Wave />
        </About>
    );
};

const Button = styled(motion.button)`
    a {
        color: white;
        text-decoration: none;
    }
`;

export default AboutSection;
