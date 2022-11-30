import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: end;
    align-items: end;
`

export const HeaderIcon = styled.img`
    width: 100%;
    max-width: 2.6rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

`