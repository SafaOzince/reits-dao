import styled from "styled-components";
import { StyledRdfAdvantages } from "./styles/RdfAdvantages.styled";
import { LeftContainer, MiddleContainer, RightContainer } from "./styles/Container.styled"

const MiddleTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  

`
const MiddleBottomContainer = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: center;
  
  width: 100%;
  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    ul {
        padding: 0;
    }
    p{
        text-align: center;
    }
    
  }

`
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 670px;
  min-height: 438px;
  margin: 20px;
  color: #7da3c7;
  

`
const SubtitleFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  margin: 0 10px;
`

export default function RdfAdvantages() {
    return (
      <StyledRdfAdvantages>
        <LeftContainer>
          <div>
          <img src='./images/Images/UpperLeftCorner.png' alt=""/>
          </div>
          <div>
          <img src='./images/Images/LowerLeftCorner.png' alt=""/>
          </div>
        </LeftContainer>
        <MiddleContainer>
          <MiddleTopContainer>
            <SubtitleFlex>
              <h1>Rdf Adventages</h1>
            </SubtitleFlex>
            <SubtitleFlex>
              <SubtitleFlex>
                <h2>Market Profit</h2>
              </SubtitleFlex>
              <SubtitleFlex>
                <h2>Rental Income</h2>
              </SubtitleFlex>
            </SubtitleFlex>
          </MiddleTopContainer>
            <div>
            <img src='./images/Images/Rdfadv.png' alt=""/>
            </div>
          <MiddleBottomContainer>
            <SubContainer>
              <p>
                Based on the long-term analysis of Kusadasi, a resort town in western <br/>
                Turkey, we purchase real estate (villas, apartments, shopping malls)<br/>
                based on location conditions and profitability.<br/>
                The rental income generated through this is linked to revenue by<br/>
                increasing the token value on a regular basis.

              </p>
              <p>
                One of the most differentiated models of ReitsDAO from the existing<br/>
                 system is probably the buy-back system, not the dividend system.<br/> 
                The rental income generated from the real estate owned by ReitsDAO<br/>
                 is not distributed and is designed as a system to Buy-Back “RDF” in<br/>
                  the market. In the case of the dividend system, real estate rental<br/>
                   income can be continuously distributed in USD value, which can be<br/>
                    attractive to users, but it is not suitable for the ReitsDAO system<br/>
                     where many users can participate..
              </p>
            </SubContainer>
            <SubContainer>
              <p>
              Due to the characteristics of the blockchain system, as the number of<br/>
               “RDF” token holders increases, the network fee borne by ReitsDAO will<br/>
                increase, and the dividend income that holders can actually receive<br/>
                 will decrease.<br/>
              In addition, the participation of bots that purchase and sell tokens<br/>
               only during the dividend period increases and the possibility of abuse<br/>
                is very high. <br/>
              In the case of a dividend system, it can be an advantage if it consists<br/>
               of a small number of investors, but it is not a good token economy<br/>
                model for the ReitsDAO system, where small investments are possible<br/>
                 and there are many participants.
              </p>
            </SubContainer>
          </MiddleBottomContainer>
          
        </MiddleContainer>
        <RightContainer>
          <div>
            <img src='./images/Images/UpperLeftCorner.png' alt=""/>
          </div>
        </RightContainer>  
        
      </StyledRdfAdvantages> 
      
    
    )
  }