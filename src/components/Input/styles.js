import styled from "styled-components";

export const Input = styled.input`
  width: 420px;
  height: 30px 40px;
  background-color: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: white;
  padding: 30px 40px;
  font-size: 22px;
  font-weight: bold; /* Corrigido para um valor válido de font-weight */
  display: flex; /* Adicionado para permitir o alinhamento vertical */
  align-items: center; /* Adicionado para alinhar verticalmente o conteúdo */
  position: relative;
  margin: 10px 0;
  transform: translateY(-50%);
`;
