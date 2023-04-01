import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
    font-family: AmaticSC, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background-color: #5B7A70;
    border: solid 2px white;
    border-radius: 5px;
    font-size: 1.8em;
    padding: 0.2rem 1rem;
    text-decoration: none;

    :hover {
    background-color:#000000;
    cursor: pointer;
}
`;

export const ButtonRed = styled.button`
    font-family: AmaticSC, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background-color: #8A4343;
    border: solid 2px white;
    border-radius: 5px;
    font-size: 1.8em;
    padding: 0.2rem 1rem;

    :hover {
    background-color:#414141;
    cursor: pointer;
}
`;