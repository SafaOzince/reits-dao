import styled from "styled-components"
import SocialIcons from "./SocialIcons"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledMainFooter } from "./styles/MainFooter.styled"

const Sc = styled.div`
display: flex;
flex-direction: row;
padding: 5px;

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
                    <p>Contact us for up-to-date news on the Reits Dao
                        community. Follow our social media accounts.</p>
                    <SocialIcons/>

                </ul>
                <ul>
                    <Sc>
                    <img src="./images/phone.svg" alt="" /> 
                    <p>0 (212) 530 92 15</p>
                    </Sc>
                    <Sc>
                    <img src="./images/fax.svg" alt="" /> 
                    <p>0 (212) 530 92 15</p>
                    </Sc>
                </ul>
                <ul>
                    <Sc>
                    <img src="./images/mail.svg" alt="" />
                    <p>info@reitsdao.com</p>
                    </Sc>
                    <Sc>
                    <img src="./images/location.svg" alt="" />
                    <p> Rota Trade Center Block A3, Floor : 12
                        D:327, 34149 Sariyer / Istanbul</p>
                    </Sc>
                </ul>
                
            </Flex>
        </Container>
    </StyledMainFooter>
  )
}