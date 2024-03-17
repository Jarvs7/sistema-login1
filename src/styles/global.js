import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: none; /* Adiciona box-sizing para evitar problemas de layout */
    }

    body {
        color: white;
        font-family: 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace', 'Poppins', sans-serif;
        background-image: url('/images/telalogin1.jpg'); /* Caminho da imagem */
        background-size: cover; /* Ajusta a imagem para cobrir todo o corpo */
        background-position: center; /* Centraliza a imagem no corpo */
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Código para Backgound Dinamico 
    background-image: linear-gradient(to left, rgb(0, 128, 128), rgb(73, 98, 122), rgba(255, 16, 105));
  background-size: 500% 100%;
  animation: degrade-animado 4s infinite alternate;
  background-attachment: fixed;
        @keyframes degrade-animado {
            0% {
                background-position-x: 0%;
            }
            
            100% {
                background-position-x: 100%;
            }
            
        }*/
`;

export default GlobalStyle;
