import { StyledHeader, Image } from "./styles/Header.styled"
import { HeaderContainer } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Button, StyledButton } from "./styles/Button.styled"
import "./Header.css"


export default function Header() {
  return(
    <StyledHeader>
      <HeaderContainer>
        <div className="header">
          <div className="headerl">
            <div className="headertit">
            Find Your Best 
            Smart Real
            Estate
            </div>

            <StyledButton >
              <div className="hbuttontit" >Get Your One</div>
            </StyledButton>
          </div>

          <Image src='./images/Images/wallpaperbetter.png' alt='' />
        </div>
      </HeaderContainer>
    </StyledHeader>
  )
}