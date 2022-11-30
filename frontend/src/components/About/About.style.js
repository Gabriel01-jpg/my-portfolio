import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ExperienceContent = styled.div`
    display: flex;
    gap: 4.6rem;
    height: 50%;

    padding: 2rem 0;

    justify-content: space-between;

`

export const ImageBox = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    background-color: var(--pink-color-300);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;

    width: 100%;
    max-width: 35.25rem;
    height: 100%;

    border-radius: 2.62rem;

    img {
        width: 100%;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

`
export const Title = styled.div`

    h2 {
        font-size: 2.2rem;
    }

    p {
        font-size: 1rem;
    }

`

export const Skills = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;

    margin-top: 1rem;
`

export const Logo = styled.img`
    width: 120px;
    height: 120px

`