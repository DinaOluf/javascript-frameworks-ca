import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
    font-family: AmaticSC, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background: #436d67;
    border: solid 2px white;
    border-radius: 5px;
    font-size: 1.8em;
    padding: 0.2rem 1rem;
    text-decoration: none;

    :hover {
    background:#000000;
    cursor: pointer;
}
`;

export const ButtonRed = styled.button`
    font-family: AmaticSC, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background: #942222;
    border: solid 2px white;
    border-radius: 5px;
    font-size: 1.8em;
    padding: 0.2rem 1rem;

    :hover {
    background:#414141;
    cursor: pointer;
}
`;