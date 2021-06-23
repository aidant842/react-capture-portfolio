import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Animations
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const OurWork = ({ movies }) => {
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >
            {movies.map((movie) => (
                <Movie>
                    <h2>{movie.title}</h2>
                    <div className="line"></div>
                    <Link to={movie.url}>
                        <img src={movie.mainImg} alt={movie.title} />
                    </Link>
                </Movie>
            ))}
            {/* <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="Athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt="The Racer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes} alt="Good Times" />
                </Link>
            </Movie> */}
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;
