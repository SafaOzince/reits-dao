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
                <div className="estimg">
                    <img src="./images/estateinfo.svg" alt="" style={{maxWidth:'75%'}}/>
                </div>
            </div>
        </>
    )
}

export default EstateTrendroyal;