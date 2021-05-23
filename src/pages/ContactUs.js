import React from "react";

//framer motion
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";
import { Hide } from "../styles";

const ContactUs = () => {
    return (
        <Contact
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Title>
                <Hide>
                    <motion.h2>Get in touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Social variants={titleAnimation}>
                    <Circle />
                    <h2>Send Us A Message</h2>
                </Social>
                <Social variants={titleAnimation}>
                    <Circle />
                    <h2>Send An Email</h2>
                </Social>
                <Social variants={titleAnimation}>
                    <Circle />
                    <h2>LinkedIn</h2>
                </Social>
            </div>
        </Contact>
    );
};

const Contact = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const Title = styled(motion.div)`
    margin-bottom: 4rem;
    color: white;
`;

const Circle = styled(motion.div)`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: #282828;
    color: white;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
        color: white;
    }
`;

export default ContactUs;
