import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { UseScroll } from "./UseScroll";
import { scroll } from "../animation";

const FaqSecion = () => {
    const [element, controls] = UseScroll();
    return (
        <Faq variants={scroll} animate={controls} ref={element}>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <div className="questions">
                <AnimateSharedLayout>
                    <Toggle title="How Do I Start?">
                        <div className="question">
                            <div className="answer">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ex, nam.
                                </p>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle title="What Products Do You Offer?">
                        <div className="question">
                            <div className="answer">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ex, nam.
                                </p>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle title="Daily Schedule?">
                        <div className="question">
                            <div className="answer">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ex, nam.
                                </p>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle title="Payment Methods?">
                        <div className="question">
                            <div className="answer">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ex, nam.
                                </p>
                            </div>
                        </div>
                    </Toggle>
                </AnimateSharedLayout>
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
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 0.3rem 0rem;
        width: 100%;
    }
    .question {
        padding: 2rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSecion;
