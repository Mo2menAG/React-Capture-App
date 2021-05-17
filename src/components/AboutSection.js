import React from "react";
//section png
import home1 from "../img/home1.png";
//styled
import styled from "styled-components";

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

//styled components
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const Describtion = styled.div`
    padding-right: 5rem;
    flex: 1;
    h2 {
        font-weight: lighter;
    }
`;

const Image = styled.div`
    overflow: hidden;
    flex: 1;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
overflow: hidden;
`

export default AboutSection;