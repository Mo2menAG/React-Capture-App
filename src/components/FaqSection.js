import React from "react";
import styled from "styled-components";
import {About, Image, Hide, Describtion} from "../styles"

const FaqSecion = () => {
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="questions">
                <div className="question">
                    <h3>How Do I Start?</h3>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nam.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h3>What Products Do You Offer?</h3>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nam.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h3>Daily Schedule?</h3>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nam.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h3>Payment Methods?</h3>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nam.</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </div>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span {
        padding-top: 0.4rem;
        display: block;
    }
    h2 {
        padding-bottom: 1.5rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 0.3rem 0rem;
        width: 100%;
    }
    .question {
        padding: 2rem 0rem;
        cursor: pointer;
    }

    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSecion;