import styled from "styled-components";
import contactbg from "./contactbg.svg";

export const StyledContact = styled.div`
  font-family: "NDAstroneer";
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
export const Textcbutton = styled.div`
  font-family: "NDAstroneer";
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  
`