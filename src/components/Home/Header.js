import { StyledHeader, Image } from "./styles/Header.styled"
import { HeaderContainer } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Button, StyledButton } from "./styles/Button.styled"
import "./Header.css"
import headerbg from './styles/headerbg.svg'

export default function Header() {
  return(
    
      <HeaderContainer>
        
          <div className="headerl">
          <div className="headertit">
            Find Your Best 
            Smart Real
            Estate
            </div>
            <div className="hbutton">Get Your One</div>
            

            {/* <StyledButton >
              <div className="hbuttontit" >Get Your One</div>
            </StyledButton> */}
          </div>
          <div className="headerr">
            <img src='./images/Images/wallpaperbetter.png' alt='' />
          </div>
        
      </HeaderContainer>
   
  )
}