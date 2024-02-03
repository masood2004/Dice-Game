import styled from "styled-components";

export const Button = styled.button`
    background-color: #000;
    color: white;
    padding: 10px 18px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: 0.4s background-color ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background-color ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;

    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
    }
`;