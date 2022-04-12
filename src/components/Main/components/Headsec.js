import "./Headsec.css"



export default function Headsec() {
    return (
   <>
    <div className="scontainer">
        <div className="lightcontainertrans">
            <div className="col-6 aos-init aos-animate " data-aos="fade-right">
                <div className="p1r">
                    <div className="hero-container">
                        <div className="titledark">
                            Reits Dao Finance
                        </div>
                        <div className="darktext1">
                            ReitsDAO is a service operated by Blokfield.Inc and is a decentralized real estate investment product service with real estate tokens linked to real assets on the BSC blockchain network.
                        </div>
                        <div className="img-card-s1 centralize">
                            <img  src="./images/Homes/Section-two-png-2upd.jpg" alt="" style={{borderRadius:"14px"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 aos-init aos-animate" data-aos="fade-left">
                <div className="p3l">
                    <div class="hero-container">
                        <div className="img-card-s1 centralize mt6">
                            <img src="./images/Homes/Section-two-png-1upd.jpg" alt="" style={{borderRadius:"14px"}}/>
                        </div>
                        <div className="darksmalltext1">
                            ReitsDAO’s token economy model is designed to be very simple. ReitsDAO issues “RDF” tokens that are collateralized with real estate values, and “RDF” tokens reflect the value and revenue of all real estate owned by ReitsDAO. Therefore,
                            the value of “RDF” token can be said to be the sum of all real estate values and profits owned by ReitsDAO. ReitsDAO does not issue new tokens reflecting each real estate value and is managed only as “RDF”.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </>
)
}