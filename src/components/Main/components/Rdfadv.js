import "./Rdfadv.css"



export default function Rdfadv() {
    return (
    <>  
        <div className="scontainer">
            <div className="lightcontainertrans">
                <div className="hero-container">
                    <div className="titlecenter">
                        RDF Adventages
                    </div>
                    <div className="text-row">
                        <div className="textsubtitle">Market Profit</div>
                        <div className="textsubtitle">Rental Income</div>
                    </div>
                    <div className="img-card img-centers">
                        <img src="./images//Homes/Section-thre-photo.png" alt="" style={{marginTop:"1em", marginBottom:"1em" }}/>
                    </div>
                    <div className="row-text">
                        <div className="col-6-c">
                            <div className="bltext">
                            Based on the long-term analysis of Kusadasi, a resort town in western Turkey, we purchase real estate (villas, apartments, shopping malls) based on location conditions and profitability. The rental income generated through this is linked to revenue by
                                    increasing the token value on a regular basis.
                            </div>
                            <br/>
                            <div className="bltext">
                            One of the most differentiated models of ReitsDAO from the existing system is probably the buy-back system, not the dividend system. The rental income generated from the real estate owned by ReitsDAO is not distributed and is designed as a system to Buy-Back
                                    “RDF” in the market. In the case of the dividend system, real estate rental income can be continuously distributed in USD value, which can be attractive to users, but it is not suitable for the ReitsDAO system where many users
                                    can participate..
                            </div>
                        </div>
                        <div className="col-6-c">
                        <div className="bltext">
                        Due to the characteristics of the blockchain system, as the number of “RDF” token holders increases, the network fee borne by ReitsDAO will increase, and the dividend income that holders can actually receive will decrease. In addition,
                                the participation of bots that purchase and sell tokens only during the dividend period increases and the possibility of abuse is very high. In the case of a dividend system, it can be an advantage if it consists of a small
                                number of investors, but it is not a good token economy model for the ReitsDAO system, where small investments are possible and there are many participants.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)   
}