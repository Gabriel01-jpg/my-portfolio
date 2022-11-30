import styled from "styled-components"
import ballsImage from '../../images/Homer/Balls.svg'

export const SkillWrapper = styled.div`
    position: relative;

`

export const SkillBackground = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    
    width: 6rem;
    height: 6rem;

    background-color: var(--pink-color-300);

    border-radius: 50%;
`

export const SkillTitle = styled.p`
    font-weight: 400;
    font-size: 1.15rem;
    text-align: center;
    color: var(--gray-color-800)
`

export const BallsBackground = styled.img`
    position: absolute;
    top: 0;
    width: 6.3rem;
    height: 9rem;

`