import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
    const [faqToggle, setFaqToggle] = useState(false);
    return (
        <motion.div
            layout
            className="question"
            onClick={() => setFaqToggle(!faqToggle)}
        >
            <motion.h3 layout>{title}</motion.h3>
            {faqToggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    );
};

export default Toggle;
