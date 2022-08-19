import styled, { keyframes } from "styled-components";


const imageAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-80px); }
    100% { transform: translateY(0); }

`
export const Image = styled.img`
    margin-right: -8rem;

    animation-name: ${imageAnimation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`
