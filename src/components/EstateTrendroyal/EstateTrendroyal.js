import "./EstateTrendroyal.css";
import EstateReasonCard from "./components/EstateReasonCard";
import Topsection from "./components/Topsection";
import EstateBottomCard from "./components/EstateBottomCard";

function EstateTrendroyal() {
    return(
        <>
            <div className="estate">
                <Topsection/>
                <EstateReasonCard/>
                <div className="estdiv"></div>
                <div className="estbottomtitle">Reliable and Safe Real Estate Asset Management</div>
                <EstateBottomCard/>
                
            </div>
            <div className="estimg">
                    <img src="./images/estateinfodark.png" alt="" style={{maxWidth:'100%'}}/>
                </div>
        </>
    )
}

export default EstateTrendroyal;