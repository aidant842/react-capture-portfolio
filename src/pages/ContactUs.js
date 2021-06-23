import React from "react";
//Animations
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >
            <h1>Contact Us</h1>
        </motion.div>
    );
};

export default ContactUs;
