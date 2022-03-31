import { StyledHeader, Image } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Button, StyledButton } from "./styles/Button.styled"


export default function Header() {
  return(
    <StyledHeader>
      <Container>
        <Flex>
          <div>
            <h1>
            Find Your Best <br/>
            Smart Real<br/>
            Estate
            </h1>

            <StyledButton >
              <h1 >Get Your One</h1>
            </StyledButton>
          </div>

          <Image src='./images/Images/wallpaperbetter.png' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}