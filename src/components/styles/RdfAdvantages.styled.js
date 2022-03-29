import styled from "styled-components";

export const StyledRdfAdvantages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #02264a;
  width: 100%;
  
  margin-top: 30px;
 

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
`