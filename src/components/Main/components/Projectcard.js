import "./Projectcard.css"



export default function Projectcard() {
    return (
        <>
        <div className="scontainer">
             <div class="container-fluid padding">
                    <h1 class="title mb-5">Estate Info</h1>
                <div class="estate-body aos-init aos-animate" data-aos="fade-up">
                        <div class="row">
                            <div class="col-xxl-5 d-flex flex-column justify-content-center">
                                <div class="side-left overflow-auto">
                                    <h2>Trend Royal <br/> Project
                                    </h2>
                                    <p class="d-md-block">First real estate to be introduced on-chain via ReitsDAO</p>
                                        <th>
                                            <h4 class="pb-2">INFO</h4>
                                        </th>
                                                                                
                                        <div className="infboxl">
                                            <div className="infbox">
                                                
                                                <div className="txestl">Propery Type:</div>
                                                
                                                <div className="txest">Commercial</div>
                                            </div>
                                            <div className="infbox">
                                                
                                                <div className="txestl">Lot Size:</div>
                                                
                                                <div className="txest">285 M2</div>
                                            </div>
                                            <div className="infbox">
                                                
                                                <div className="txestl">Rental Yield:</div>
                                                
                                                <div className="txest">~0.0%</div>
                                            </div>
                                            <div className="infbox">
                                                
                                                <div className="txestl">YEAR BUILT:</div>
                                                
                                                <div className="txest">2015</div>
                                            </div>
                                            <div className="infbox">
                                                
                                                <div className="txestl">Rental Escolation:</div>
                                                
                                                <div className="txest">3-5% Per Annum</div>
                                            </div>
                                            
                                        </div>
                                   
                                    <h4 className="pt-5 d-md-block">Related Notice</h4>
                                </div>
                            </div>
                            <div className="col-xxl-7 side-right m-auto">
                                <div className="titlecont">
                                    <div className="estjpgtitle">Site Overview</div>
                                    <div className="estjpgtitle">Swimming Pool</div>
                                </div>
                                <div className="estjpg">
                                    <img className="img-fluid1" src="./images/Homes/EstateInfo-2a.jpg" alt="" style={{maxWidth:'45%', borderRadius:"14px"}}/>
                                    <img className="img-fluid1" src="./images/Homes/EstateInfo-2b.jpg" alt="" style={{maxWidth:'45%', borderRadius:"14px"}}/>
                                </div>
                                <div className="titlecont">
                                    <div className="estjpgtitle">Dining Room</div>
                                    <div className="estjpgtitle">Bathroom</div>
                                </div>
                                <div className="estjpg">
                                    <img className="img-fluid1" src="./images/Homes/EstateInfo-2c.jpg" alt="" style={{maxWidth:'45%', borderRadius:"14px"}}/>
                                    <img className="img-fluid1" src="./images/Homes/EstateInfo-2d.jpg" alt="" style={{maxWidth:'45%', borderRadius:"14px"}}/>
                                </div>
                                <div className="titlecont">
                                    <div className="estjpgtitle">Ocean view</div>
                                    <div className="estjpgtitle">Garden</div>
                                </div>
                                <div className="estjpg">
                                    <img className="img-fluid1" src="./images/Homes/EstateInfo-2e.jpg" alt="" style={{maxWidth:'45%', borderRadius:"14px", minHeight:'178px'}}/>
                                    <img className="img-fluid1" src="./images/Homes/EstateInfo-2f.jpg" alt="" style={{maxWidth:'45%', borderRadius:"14px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}