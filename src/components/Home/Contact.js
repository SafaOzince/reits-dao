import styled from "styled-components";
import { StyledContact } from "./styles/Contact.styled";
import { LeftContainer, MiddleContainer, RightContainer } from "./styles/Container.styled"
import { ContactButton } from "./styles/Button.styled";

const Contactcontainer = styled.div`
  width: 100%;
  height: 78.5px;
  margin: 30px;
  border-style: solid;
  border-color: #f0f0f0;
  border-width: 3px;
  background-color: #02264a;
  border-radius: 12px;
  padding: 5px 16px;
  opacity: 0.13;    
  color: #fff;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
    max-width: 500px;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`

const Xlcontainer = styled.div`
width: 89%;
height: 209.8px;
margin: 30.9px 30.1px 30.7px 30px;
padding: 3px 16px;
opacity: 0.13;
border-style: solid;
border-color: #f0f0f0;
border-width: 3px;
background-color: #02264a;
border-radius: 12px;
color: #fff;
@media(max-width: ${({ theme }) => theme.mobile}) {
  width: 80%;
  max-width: 500px;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
`
const Smallcontainer = styled.div`
  width: 43%;
  height: 78.5px;
  margin: 20px;
  border-style: solid;
  border-color: #f0f0f0;
  border-width: 3px;
  background-color: #02264a;
  border-radius: 12px;
  padding: 5px 16px;
  opacity: 0.13;
  color: #fff;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
    max-width: 500px;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`
const Largecontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 750px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  @media(max-width: ${({ theme }) => theme.mobile}) {
    
    flex-direction: column;
    text-align: center;
    align-items: center;
  } 
  
  
`
export default function Contact() {
    return (
      <StyledContact>
        <LeftContainer>
          <div>
          <img src='./images/Images/ContactLeft.png' alt=""/>
          </div>
         
        </LeftContainer>
        <MiddleContainer>
            <div>
              <h1 >Contact</h1>
            </div>
            <Largecontainer>
              <Smallcontainer><h2>Your name</h2></Smallcontainer> 
              <Smallcontainer><h2>Sur name</h2></Smallcontainer> 
            </Largecontainer>
            <Largecontainer>
            <Contactcontainer><h2>Mail</h2></Contactcontainer>
            </Largecontainer>
            <Largecontainer> 
            <Contactcontainer><h2>Phone</h2></Contactcontainer> 
            </Largecontainer>
            <Xlcontainer><h2>Your message</h2></Xlcontainer > 
            <ContactButton>Send</ContactButton>
        </MiddleContainer>
        <RightContainer>
          <div>
            <img src='./images/Images/Contactright.png' alt=""/>
          </div>
        </RightContainer>  
      </StyledContact> 
      
    
    )
  }