import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% { opacity: 0; transform: translateY(-150px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px)}
    25% { opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
    75% { opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
    100% { opacity: 0; transform: translateY(-150px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px)}

`

export const Wrapper = styled.span`
    display: inline-block;
    
    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 9s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    ${(props) => {
        let stringSpan;
        for(let i = 1; i <= props.size; i++){
            stringSpan += `span:nth-child(${i}) {   
                    animation-delay: ${i / 10}s;
                }`
                
        }

        return stringSpan;
    }}
    

`