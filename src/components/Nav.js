import React from "react";
import styled from "styled-components";

const Nav = () => {
    return(
        <StyledNav>
            <h1>
                <a href="">Capture</a>
            </h1>
            <ul>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Our Work</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
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

export default Nav