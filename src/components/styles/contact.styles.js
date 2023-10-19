import styled from "styled-components";

export const Input = styled.input`
    height: 1.5rem;
    width: 100%;
    border: solid 1px black;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
`;

export const TextArea = styled.textarea`
    height: 1.5rem;
    width: 100%;
    border: solid 1px black;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    min-height: 8rem;
    resize: none;
`;

export const Button = styled.button`
    font-family: AmaticSC, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background: #436d67;
    border: solid 2px white;
    border-radius: 5px;
    font-size: 1.8em;
    padding: 0.2rem 1rem;
    width: 15rem;

    :hover {
    background:#000000;
    cursor: pointer;
}
`;

export const Error = styled.p`
    color: #942222;
`;