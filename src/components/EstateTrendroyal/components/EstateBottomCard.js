import "./EstateBottomCard.css";

function EstateBottomCard (){
return(
    <div className="estbottomrow">
        <div className="estbottomcard">
            <div className="estbottomcardtop">
                <img src="./images/EstateBottomCard1.svg" alt=""/>
            </div>
            <div className="estbottomcardbottom">
                <div className="estbottomcardtitle">High Rental Demand</div>
                <div className="estbottomcardcomm">Trend Royal was built for the second time in Kusadasi, and it is a very attractive product with few vacancies as a high-end residential building
                </div>
            </div>
        </div>
        <div className="estbottomcard">
            <div className="estbottomcardtop">
                <img src="./images/EstateBottomCard2.svg" alt=""/>
            </div>
            <div className="estbottomcardbottom">
                <div className="estbottomcardtitle">Additional IR</div>
                <div className="estbottomcardcomm">In the course of the project, we have several  plans to put additional investment funds into the project.
                </div>
            </div>
        </div>
        <div className="estbottomcard">
            <div className="estbottomcardtop">
                <img src="./images/EstateBottomCard3.svg" alt=""/>
            </div>
            <div className="estbottomcardbottom">
                <div className="estbottomcardtitle">Sell-off Value</div>
                <div className="estbottomcardcomm">If the yield falls or the management cost increases, the real estate is sold by voting, etc. This leads to immediate returns for investors.
                </div>
            </div>
        </div>
    </div>
)
}
export default EstateBottomCard;