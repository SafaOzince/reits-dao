import { Container, CustomContainer } from "./styles/Container.styled"
import { StyledEstateInfo } from "./styles/EstateInfo.styled"
import Card from "./Card"



export default function EstateInfo() {
    return(
      <StyledEstateInfo>
          
        <Container>
            <h1>Estate Info</h1>
            <CustomContainer>
                <div>
                    <div>
                    <h2>TREND ROYAL PROJECT</h2>
                    <p>First real estate to be introduced on-chain via ReitsDAO</p>
                    </div>
                    <div>
                        <div>
                            <h2>INFO</h2>
                            <p> Property Type:<br/>
                                Lot Size:<br/>
                                Rental Yield:<br/>
                                Year built:<br/>
                                Rental Escalation:<br/>
                                <br/>
                                Related Notice
                            </p>
                        </div>
                        <div>
                            <h2> </h2>
                            <p> Commercial<br/>
                                285M2<br/>
                                ~0.0%<br/>
                                2015<br/>
                                3-5% Per Annum<br/>
                                <br/>
                                <br/>
                            </p>    
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./images/Images/trendroyal1.png" alt=""/>
                </div>

            </CustomContainer>
            <CustomContainer>
            <div>
                    <div>
                    <h2>TREND ROYAL PROJECT</h2>
                    <p>First real estate to be introduced on-chain via ReitsDAO</p>
                    </div>
                    <div>
                        <div>
                            <h2>INFO</h2>
                            <p> Property Type:<br/>
                                Lot Size:<br/>
                                Rental Yield:<br/>
                                Year built:<br/>
                                Rental Escalation:<br/>
                                <br/>
                                Related Notice
                            </p>
                        </div>
                        <div>
                            <h2> </h2>
                            <p> Commercial<br/>
                                285M2<br/>
                                ~0.0%<br/>
                                2015<br/>
                                3-5% Per Annum<br/>
                                <br/>
                                <br/>
                            </p>    
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./images/Images/trendroyal2.png" alt=""/>
                </div>
            </CustomContainer>
           
        </Container>

      </StyledEstateInfo>

    )
}