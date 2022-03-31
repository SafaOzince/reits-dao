import { Container } from "../Home/styles/Container.styled";
import { Button } from "./components/Button";
import "./Defi.css"


function Defi() {
    return(
        <>
          <div className="defi">
            <div className="defi-container">
                <div className="d-cont">
                    <div className="d-name">
                        <div className="d-text">
                            Total Supply
                        </div>
                        <div className="d-text">
                            Circulation Supply
                        </div>
                        <div className="d-text">
                            Total Burned
                        </div>
                    </div>
                    <div className="d-name">
                        <div className="d-textvalue">
                            380,499
                        </div>
                        <div className="d-textvalue">
                            105,966
                        </div>
                        <div className="d-textvalue">
                            16,034
                        </div>
                    </div> 
                </div>
                <div className="d-cont">
                    <div className="d-name">
                         <div className="d-text">
                            Market Cap
                        </div>
                        <div className="d-text">
                            RDF Token Price
                        </div>
                    </div>
                    <div className="d-name">
                        <div className="d-textvalue">
                            504
                        </div>
                        <div className="d-textvalue">
                            $ 5,537,654
                        </div>
                    </div>    
                </div>
                <div className="d-cont1">
                    <img src="./images/meta-logo.svg" alt=""/>
                    <Button buttonStyle="btn--primary">Add to Metamask</Button>
                 
                </div>
            </div>
          </div>
          <div className="defi-body">
                <div className="d-header">Defi Services</div>
                <div className="d-cards">   
                    <div className="d-card">
                        <div className="d-title">
                            Robinia
                        </div>
                        <div className="d-logo">
                            <img src="./images/rv2logo.svg" alt=""/>
                        </div>
                        <div className="d-comm">
                            <div className="d-par">
                                The first DeFi 1.0 project to 
                                combine the advantages of 
                                DeFi 2.0.
                            </div>
                        </div>
                    </div>
                    <div className="d-card">
                        <div className="d-title">
                            Wisteria
                        </div>
                        <div className="d-logo">
                            <img src="./images/Wisteria-logo-yazısız.png" alt=""/>
                        </div>
                        <div className="d-comm">
                            <div className="d-par">
                            First DeFi 2.0 combined
                            with the yield farming 
                            system
                            </div>
                        </div>
                    </div>
                    <div className="d-card">
                        <div className="d-title">
                            How to Start
                        </div>
                        <div className="d-logo">
                            <img src="./images/youtube-logo.svg" alt=""/>
                        </div>
                        <div className="d-comm">
                            <div className="d-par">
                            Youtube Tutorial
                            Videos
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
           
        </>
    )
}

export default Defi;