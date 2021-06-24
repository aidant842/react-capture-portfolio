import React from "react";

//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import ScrollTop from "../components/ScrollTop";
//Animations
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <AboutSection />
            <ServicesSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    );
};

export default AboutUs;
