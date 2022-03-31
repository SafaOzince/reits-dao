import styled from "styled-components";
import { StyledAdvantages, StyledAdvantages1 } from "./styles/Advantages.styled";
import { CardContainer } from "./styles/Container.styled";
import {CContainer, CsContainer, Cs2Container, Cs3Container} from "./Card";

const AdvCont = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 60px;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`


export default function Adventages () {
    return(
<StyledAdvantages>
    <AdvCont>
        <div>
            <div>
                <h2>Rdf Advantages</h2>
                <CardContainer>
                    <p> Opportunity cost reduction
                    </p>
                </CardContainer>
            </div>
            <div>
                <h2>Opportunity<br/>Cost</h2>
                <img src="./images/Opportunity.svg" alt=""/>
            </div>
        </div>
        <div>
            <div>
                <h2>Financial<br/>Liquidity</h2>
                <img src="./images/financialliquidity.svg" alt=""/>
            </div>
            <div>
            <CardContainer>
                <p> In the case of general real estate investment, there is a disadvantage of insufficient liquidity. By tokenizing the value of real estate, small investment is possible and loss of opportunity cost can be minimized.



                </p>
            </CardContainer>
            </div>
        </div>
    </AdvCont>
    <StyledAdvantages1>
        <div>
            <img src="./images/Images/EkstraIncome.png" alt=""/>
        </div>
        <div>
                <h2>Rdf Advantages</h2>
                <h2>Ekstra Income</h2>
                <CardContainer>
                    <p> Tokens issued while investing in real estate generate continuous interest income through the DeFi service, so you can expect maximum efficiency in fund management.

                    </p>
                </CardContainer>
            </div>
            
    </StyledAdvantages1>
    <AdvCont>   
        <CContainer>
            <CsContainer>
                <img src={'./images/CardImages/Group-9124.svg'} alt=""/>
            </CsContainer>
            <div>
                <h2>Small Investment Possible</h2>
            </div>
        </CContainer>
        <CContainer>
            <Cs2Container>
                <img src={'./images/CardImages/Group-9125.svg'} alt=""/>
            </Cs2Container>
            <div>
                <h2>Subscription Method Funding</h2>
            </div>
        </CContainer>
        <CContainer>
            <Cs3Container>
                <img src={'./images/CardImages/Group-9126.svg'} alt=""/>
            </Cs3Container>
            <div>
                <h2>Passing Revenue with Token Buyback</h2>
            </div>
        </CContainer>
        
    </AdvCont>      
</StyledAdvantages>
    )
}

