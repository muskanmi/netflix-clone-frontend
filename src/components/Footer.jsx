import React from "react";
import styled from "styled-components";
import TmdbLogo from "../assets/tmdb-logo-2.svg";

const Footer = () => {
    return (
        <Container className="grid-container">
            <div class="grid-child purple">
                <img src={TmdbLogo} />
            </div>
            <div class="grid-child green">
                <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            </div>
        </Container>
    )
};

const Container = styled.div`
background-color: #032541;
padding: 20px;
display: flex;
justify-content: center;
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
img {
    width: 120px;
}
.grid-child.purple {
    padding-right: 30px;
}
.grid-child.green {
    color: #85a9c8;
}
`;

export default Footer;