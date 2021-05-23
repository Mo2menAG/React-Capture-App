import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//framer motion
import { motion } from "framer-motion";
import { pageAnimation, fade, scroll } from "../animation";
import { UseScroll } from "../components/UseScroll";

const OurWork = () => {
    const [element1, controls1] = UseScroll();
    const [element2, controls2] = UseScroll();
    const [element3, controls3] = UseScroll();
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Movie variants={scroll} animate={controls1} ref={element1}>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie variants={scroll} animate={controls2} ref={element2}>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="theracer" />
                </Link>
            </Movie>
            <Movie variants={scroll} animate={controls3} ref={element3}>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 3rem 6rem;
`;

const Movie = styled(motion.div)`
    padding-bottom: 7rem;
    h2 {
        padding: 1rem 0rem;
        color: white;
    }

    img {
        width: 100%;
    }

    .line {
        height: 0.3rem;
        margin-bottom: 3rem;
        background: #23d997;
    }
`;

export default OurWork;
