import styled from "styled-components";

export const StyledUserPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #000;
  width:100%;
  height: 100vh;
  padding: 10px;
 

  header {
    display: flex;
    justify-content: center;
    h1 {
      color: #0000ff;
     
    }
  }

  h2 {
    color: #ffff;
  }

  button{
    border: 1px solid #ffff;
    background: none;
    color: #ffff;
    padding: 10px 15px;
    margin: 10px;
    border-radius: 8px;
  }

`;
