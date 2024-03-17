import styled from "styled-components";


export const Button = styled.button`
    width: 200%;
    height: 30px 40px;
    background: #e0ffff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 20px;
    color: #000080;
    font-weight: bold;
    padding: 30px 40px;
    max-width: 250px;

    &:hover {
        background-color: #A9A9A9; /* Nova cor de fundo quando o mouse passa por cima */
        cursor: pointer; /* Altera o cursor para indicar que o botão é clicável */
        color:#4682B4;

    }
    `;