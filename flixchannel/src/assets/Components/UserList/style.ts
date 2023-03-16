import styled from "styled-components";

export const StyleUserList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;

  .add-button {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 40px;
  
    
  }
`;
