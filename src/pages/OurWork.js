import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Animations
import {
    pageAnimation,
    fade,
    photoAnim,
    lineAnim,
    slider,
    sliderContainer,
} from "../animation";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";

const OurWork = ({ movies }) => {
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            {movies.map((movie) => (
                <Movie key={movie.title}>
                    <motion.h2 variants={fade}>{movie.title}</motion.h2>
                    <motion.div
                        variants={lineAnim}
                        className="line"
                    ></motion.div>
                    <Link to={movie.url}>
                        <Hide>
                            <motion.img
                                variants={photoAnim}
                                src={movie.mainImg}
                                alt={movie.title}
                            />
                        </Hide>
                    </Link>
                </Movie>
            ))}
            <ScrollTop />
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
    h2 {
        padding: 1rem 0rem;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

//Frame animation

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8eb2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;
export default OurWork;
