import React from "react";
//Import img
import home2 from "../img/home2.png";

//styled
import styled from "styled-components";
import { UseScroll } from "./UseScroll";
import { scroll } from "../animation";

//Import icons
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";

//styles
import { About, Image, Describtion } from "../styles";

const ServicesSectiont = () => {
    const [element, controls] = UseScroll();
    return (
        <Services variants={scroll} animate={controls} ref={element}>
            <Describtion>
                <h2>
                    Hight <span>Quality</span> services
                </h2>
                <Cards>
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Cards>
            </Describtion>
            <Image>
                <img src={home2} alt="camera" />
            </Image>
        </Services>
    );
};
const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    .card {
        flex-basis: 20rem;
        .icon {
            display: flex;
            align-items: center;
            h3 {
                margin-left: 0.9rem;
                padding: 1rem;
            }
        }
    }
`;

export default ServicesSectiont;
