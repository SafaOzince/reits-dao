import styled from "styled-components";
import contactbg from "./contactbg.svg";
export const StyledContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #02264a;
  color: #fff;
  width: 100%;
  background-image:url(${contactbg}); 
  padding: 80px;
 

  @media(max-width: ${({ theme }) => theme.mobile}) {
    
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
`