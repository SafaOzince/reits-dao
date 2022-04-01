import styled from "styled-components";
import rdfbg from "./rdfbg.svg"

export const StyledRdfAdvantages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #02264a;
  width: 100%;
  background-image:url(${rdfbg}); 
  margin-top: 30px;
 

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
`