import "./Rdfopportunity.css"



export default function Rdfopportunity() {
    return (
        <>
        <div className="scontainer">
            <div className="lightcontainer">
                <div className="col-5">
                    <div className="hero-container">
                        <div className="opptext1">
                            RDF Advantages
                        </div>
                        <div className="titledark1">
                            Opportunity Cost <br/> Reduction
                        </div>
                        <div className="col-4">
                            <div className="col-3">
                                <div className="titledarks">
                                    Opportunity
                                </div>
                                <div className="titledarks">
                                    Cost
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="img-card fend">
                                    <img src="./images/Homes/Section-four-leftphoto.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="vs titledark">VS</div>
                </div>
                <div className="col-5">
                    <div className="hero-container">
                        <div className="titledarks">
                            Financal
                        </div>
                        <div className="titledarks">
                            Liquidty
                        </div>
                        <div className="img-card">
                            <img src="./images/Homes/section-four-rightphoto.png" alt=""/>
                        </div>
                        <div className="opptextr">In the case of general real estate investment, there is a disadvantage of insufficient liquidity. By tokenizing the value of real estate, small investment is possible and loss of opportunity cost can be minimized.
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    }