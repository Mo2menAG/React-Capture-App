import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link to="">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                    <Line
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "69%" : "0%" }}
                        transition={{ duration: 1.35 }}
                    />
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                    <Line
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/work" ? "70%" : "0%" }}
                        transition={{ duration: 1.35 }}
                    />
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    <Line
                        initial={{ width: "0%" }}
                        animate={{
                            width: pathname === "/contact" ? "73%" : "0%",
                        }}
                        transition={{ duration: 1.35 }}
                    />
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    //justify-content: space-between;
    background: #282828;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        //margin: auto;
        justify-content: space-between;
        list-style: none;
        li {
            padding-right: 2rem;
            position: relative;
        }
    }
    h1 {
        a {
            font-family: "Lobster", cursive;
            font-weight: lighter;
            font-size: 2rem;
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.2rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -40%;
    left: 0%;
`;

export default Nav;
