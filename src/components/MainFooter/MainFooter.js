import styled from "styled-components"
import SocialIcons from "./SocialIcons"
import { Container } from "../Home/styles/Container.styled"
import { Flex } from "../Home/styles/Flex.styled"
import { StyledMainFooter } from "./MainFooter.styled"
import "./MainFooter.css"

const Sc = styled.div`
display: flex;
flex-direction: row;
align-items:center;
padding: 6px;

`

export default function MainFooter() {
  return (
    <StyledMainFooter>
        <Container>
            <Flex>
                <ul>
                <img src="./images/flogo.svg" alt="" />
                </ul>
                <ul>
                    <h1>Follow us</h1>
                    <div className="mb-2">Contact us for up-to-date news on the Reits Dao
                        community. Follow our social media accounts.</div>
                    <SocialIcons/>

                </ul>
                <ul>
                    <Sc>
                    <img className="mr-2" src="./images/phone.svg" alt=""  /> 
                    <div>0 (212) 530 92 15</div>
                    </Sc>
                    <Sc>
                    <img className="mr-2"src="./images/fax.svg" alt="" /> 
                    <div>0 (212) 530 92 15</div>
                    </Sc>
                </ul>
                <ul>
                    <Sc>
                    <img className="mr-2" src="./images/mail.svg" alt="" />
                    <div>info@reitsdao.com</div>
                    </Sc>
                    <Sc>
                    <img className="mr-2" src="./images/location.svg" alt="" />
                    <div > Rota Trade Center Block A3, Floor : 12
                        D:327, 34149 Sariyer / Istanbul</div>
                    </Sc>
                </ul>
                
            </Flex>
        </Container>
    </StyledMainFooter>
  )
}