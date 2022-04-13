import "./EstateReasonCard.css";

function EstateReasonCard (){
return(
    <>
    <section id="estmidcont" className="estmidcont aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="estcontainermaxwith">  
                    <div className="estmidconttitle">Reason For Choosing Investment</div>
                </div>
                <div className="estcontainermaxwith">
                    <div className="estmidcontinside">
                        <div className="estimgg">
                            <iframe src="https://www.youtube.com/embed/sxipJELtDJk" style={{width:"100%", height:"100%", minHeight: "420px", borderRadius:"15px"}}
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen="true"
                            title='video'
                            />
                        </div>
                        {/* <img className="estimgg" src="./images/Images/estatetrend2.png" alt="" style={{maxWidth:'95%'}}/> */}
                        <div className="estmidcontright">
                            <div className="est-text1">Basic Info</div>
                            <div className="est-divider1"></div>
                            <div className="est-rightrow">
                                <div className="estmidcontrightsub">
                                    <div className="est-text2">Address</div>
                                    <div className="est-text3">Rota Trade Center Block A3, Floor : 12 D:327, 34149 Sariyer / Istanbul</div>
                                </div>
                                <div className="estmidcontrightsub1">
                                    <div className="est-text2">IFO Volume</div>
                                    <div className="est-text3">934.345.3455</div>
                                </div>
                            </div>
                            <div className="est-rightrow">
                                <div className="estmidcontrightsub">
                                    <div className="est-text2">Land Area</div>
                                    <div className="est-text3">California</div>
                                </div>
                                <div className="estmidcontrightsub1">
                                    <div className="est-text2">Revenue</div>
                                    <div className="est-text3">Sold</div>
                                </div>
                            </div>
                            <div className="est-rightrow">
                                <div className="estmidcontrightsub">
                                    <div className="est-text2">Year Built</div>
                                    <div className="est-text3">1876</div>
                                </div>
                                <div className="estmidcontrightsub1">
                                    <div className="est-text2">Contract Date</div>
                                    <div className="est-text3">06.15.2022</div>
                                </div>
                            </div>
                            <div className="est-rightrow">
                                <div className="estmidcontrightsub">
                                    <div className="est-text2">Building Size</div>
                                    <div className="est-text3">535 m2</div>
                                </div>
                                <div className="estmidcontrightsub1">
                                    <div className="est-text2">Tax Rate</div>
                                    <div className="est-text3">%45</div>
                                </div>
                            </div>
                            <div className="est-rightrow">
                                <div className="estmidcontrightsub">
                                    <div className="est-text2">Households</div>
                                    <div className="est-text3">Decentralized</div>
                                </div>
                                <div className="estmidcontrightsub1">
                                    <div className="est-text2">Market Demands</div>
                                    <div className="est-text3">Super</div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>    
                    {/* <div className="est-divider2"></div> */}
 
               
               
            <section class="estcontract-sideblue aos-init aos-animate" data-aos="zoom-out">
                <div className="estcontainermaxwith"> 
                    <div className="estmidcontinside2">    
                        <div className="bluebox-1">
                            <div className="imglog">
                                <img src="./images/projecttpng.png" alt="" style={{width: "60%"}}/>
                            </div>
                            <div className="estfinish2">Contract Documents</div>
                        </div>
                        <div className="bluebox2">
                            <div className="estmidcontinside">
                                <div className="estbluecontbox">
                                    {/* <div className="estcardbox"> */}
                                    {/* <img src="./images/Group-9152.svg" alt=""/> */}
                                    <div className="est-boxtit">Estate Agent Licence</div>
                                </div>
                                <div className="estbluecontbox">
                                    {/* <div className="estcardbox"> */}
                                    {/* <img src="./images/Group-9152.svg" alt=""/>  */}
                                    <div className="est-boxtit">Registered Documents</div>
                                </div>
                                <div className="estbluecontbox">
                                    {/* <div className="estcardbox"> */}
                                    {/* <img src="./images/Group-9152.svg" alt=""/> */}
                                    <div className="est-boxtit">Contract Document</div>
                                </div>
                                <div className="estbluecontbox">
                                    {/* <div className="estcardbox"> */}
                                    {/* <img src="./images/Group-9152.svg" alt=""/> */}
                                    <div className="est-boxtit">Reits Dao Company Document</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>         
)
}
export default EstateReasonCard;