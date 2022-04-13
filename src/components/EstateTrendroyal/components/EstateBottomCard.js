import "./EstateBottomCard.css";

function EstateBottomCard (){
return(
<section className="estbottomcontainer">
    <div className="estcontainermaxwith"> 
        <div className="estbottomtitle aos-init aos-animate" data-aos="zoom-in">Reliable and Safe Real Estate Asset Management</div>
    </div>
    <div className="estcontainermaxwith">
        <div className="estbottomrow">
            <div className="estcardboxcontainer aos-init aos-animate" data-aos="zoom-in">
                <div className="estbottomcard">
                    <div className="estbottomcardtop">
                        <img src="https://masterkutu.com/secret/reitsdao/Assets/img/reliable-1.png" alt="" style={{width:"35%"}}/>
                    </div>
                    <div className="estbottomcardbottom">
                        <div className="estbottomcardtitle">High Rental Demand</div>
                        <div className="estbottomcardcomm">Trend Royal was built for the second time in Kusadasi, and it is a very attractive product with few vacancies as a high-end residential building
                        </div>
                    </div>
                </div>
            </div>
            <div className="estcardboxcontainer aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
                <div className="estbottomcard">
                    <div className="estbottomcardtop">
                        <img src="https://masterkutu.com/secret/reitsdao/Assets/img/reliable-2.png" alt="" style={{width:"35%"}}/>
                    </div>
                    <div className="estbottomcardbottom">
                        <div className="estbottomcardtitle">Additional IR</div>
                        <div className="estbottomcardcomm">In the course of the project, we have several  plans to put additional investment funds into the project.
                        </div>
                    </div>
                </div>
            </div>
            <div className="estcardboxcontainer aos-init aos-animate" data-aos="zoom-in" data-aos-delay="600">
                <div className="estbottomcard">
                    <div className="estbottomcardtop">
                        <img src="./images/EstateBottomCard3.svg" alt="" style={{width:"35%"}}/>
                    </div>
                    <div className="estbottomcardbottom">
                        <div className="estbottomcardtitle">Sell-off Value</div>
                        <div className="estbottomcardcomm">If the yield falls or the management cost increases, the real estate is sold by voting, etc. This leads to immediate returns for investors.
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</section>
)
}
export default EstateBottomCard;