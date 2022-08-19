import styled, { keyframes } from "styled-components";

import backgroundCube from '../../images/Homer/background-cubes.svg'

export const HomeSection = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
`

export const HomeContent = styled.div`
    display: flex; 
    flex-direction: row;
    height: 65%;
    width: 100%;

    justify-content: space-between;

    background-image: url(${backgroundCube});
    background-size: contain;
    background-position-x: 40%;
    background-repeat: no-repeat;
`

export const HomeTitle = styled.div`
    margin-top: 5rem;
`
export const Title = styled.h1`
    font-size: 3rem;
    color: ${props => props.color || "#000"};
    max-width: ${props => props.maxWidth || '100%'};
`

export const FileDownload = styled.a`
    display: block;
    position: relative;

    width: 15rem;
    
    margin-top: 1.5rem;
    
    text-decoration: none;
    font-size: 1rem;
    color: #000;
    cursor: pointer;

    &:after {
        content: "";
        position: absolute;
        padding-bottom: 5px;
        bottom: 0;
        right: 0;
        height: 0.5em;
        width: calc(100% - 10rem);
        border-top: 1px solid black;
        z-index: -1;

    };

`