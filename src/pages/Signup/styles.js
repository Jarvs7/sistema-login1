import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  border: none;
   /* Estilização para o placeholder do input dentro do Container */
   input::placeholder {
    color: #fff; /* Define a cor do texto do placeholder como branco */
    text-align: center;
  }

`;

/*Box do Login */
export const Content = styled.div`
   width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  background-color: transparent;
  max-width: 350px;
  padding: 80px 95px 20px 95px;
  color: white;
`;
/*Titulo */
export const label = styled.label`
  font-size: 28px;
  font-weight: bold;
  background: transparent;
  backdrop-filter: blur(30px);
  color: #fff;
  padding: 30px 40px;
  justify-content: center;
  align-items: center;
`;

export const labelSignin = styled.label`
  font-size: 18px;
  font-weight: 600;
  background: transparent;
  backdrop-filter: blur(30px);
  color: #fff;
  padding: 30px 40px;
  justify-content: center;
  align-items: center;
`;

export const labelError = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: salmon;
  margin-bottom: 10px;
`;

export const Strong = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center; 

  height: 40px; /* Defina a altura do elemento pai */

  font-size: 24px;
  font-weight: bold;

  a {
    color: wheat;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
    max-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
