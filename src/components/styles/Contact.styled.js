import styled from "styled-components";

export const StyledContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #02264a;
  color: #fff;
  width: 100%;
  
  padding: 80px;
 

  @media(max-width: ${({ theme }) => theme.mobile}) {
    
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
`