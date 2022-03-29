import styled from "styled-components";
import { StyledWelcome } from "./styles/Welcome.styled";
import { CardContainer } from "./styles/Container.styled";


const CardImage = styled.img`
  width: 711px;
  height: 706px;
  margin: 55px 123px 127px 42px;
  object-fit: contain;


  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 60%;
    margin: 20px 0 15px;
  }

`


export default function WelcomePage() {
    return (
      <StyledWelcome>
        <div>
            <div>
                <h2>Reits Dao Finance</h2>
                <CardContainer>
                    <p> ReitsDAO is a service operated by Blokfield.Inc and is 
                        a decentralized real estate investment product service 
                        with real estate tokens linked to real assets on the BSC 
                        blockchain network.
                    </p>
                </CardContainer>
            </div>
        <div>
          <CardImage src="./images/Images/Group-345.png" alt=""/>
        </div>
      </div>
      <div>
        <div>
          <CardImage src="./images/Images/contemporary-home-minimalist.png" alt=""/>
        </div>
        <div>
            <CardContainer>
                <p> ReitsDAO’s token economy model is designed to be very 
                    simple. ReitsDAO issues “RDF” tokens that are collateralized with 
                    real estate values, and “RDF” tokens reflect the value and 
                    revenue of all real estate owned by ReitsDAO. 
                    Therefore, the value of “RDF” token can be said to be the 
                    sum of all real estate values and profits owned by ReitsDAO. 
                    ReitsDAO does not issue new tokens reflecting each real 
                    estate value and is managed only as “RDF”.
                </p>
            </CardContainer>
        </div>
      </div>
    </StyledWelcome>
    )
  }