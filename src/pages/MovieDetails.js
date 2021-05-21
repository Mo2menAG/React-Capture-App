import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import MovieState from "../MovieState";

//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    //useeffect
    useEffect(() => {
        const currentMovie = movies.filter(
            (stateMovie) => stateMovie.url === url
        );
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <Details
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <HeadLine>
                        <h1>{movie.title}</h1>
                        <img src={movie.mainImg} alt="movie" />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award>
                                <h3>{award.title}</h3>
                                <div className="line"></div>
                                <p>{award.description}</p>
                            </Award>
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="" />
                    </ImageDisplay>
                </Details>
            )}
        </>
    );
};

const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h1 {
        position: absolute;
        top: 8%;
        left: 50%;
        transform: translate(-50%, -10%);
        font-size: 1.6rem;
        padding-bottom: 10rem;
    }
    img {
        width: 100%;
        //height: 70vh;
        //object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const Award = styled.div`
    padding: 5rem;
    h3 {
        font-size: 1.3rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.3rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
    }
`;

export default MovieDetails;
