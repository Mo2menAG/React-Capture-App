import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link to="">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
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

export default Nav;
