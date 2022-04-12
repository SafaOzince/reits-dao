import "./Projectcard.css"



export default function Projectcard() {
    return (
        <>
            <div className="scontainer-8">
                <div className="titleest-1" style={{marginBottom:"2rem"}}>Estate Info</div>
                <div className="container-8">
                    <div className="col-8">
                        <div class="hero-container">
                            <div className="project-title">
                                Trend Royal Project
                            </div>
                            <div className="project-subtitle">
                                First real estate to be introduced on-chain via ReitsDAO    
                            </div> 
                            <div className="project-infotext">INFO</div>
                            <div className="project-table">
                                <div className="col-4-p">
                                    <div className="project-infotextl">Propery Type:</div>
                                    <div className="project-infotextl">Lot Size:</div>
                                    <div className="project-infotextl">Rental Yield:</div>
                                    <div className="project-infotextl">YEAR BUILT:</div>
                                    <div className="project-infotextl">Rental Escolation:</div>
                                </div>
                                <div className="col-4-p">
                                    <div className="project-infotextr">Commercial</div>
                                    <div className="project-infotextr">285 M2</div>
                                    <div className="project-infotextr">~0.0%</div>
                                    <div className="project-infotextr">2015</div>
                                    <div className="project-infotextr">3-5% Per Annum</div>
                                </div>
                            </div>
                            <div className="project-bottomtitle">
                                Related Notice    
                            </div> 
                        </div>
                    </div>
                    <div className="col-8 p-wrap">
                        <div className="p-hero">
                            <div className="estjpgtitle">Site Overview</div>
                            <div className="p-img-card">
                                <img src="./images/Homes/EstateInfo-2a.jpg" alt="" style={{borderRadius:"0 0 14px 14px", marginBottom:'1rem'}}/>
                            </div>
                            <div className="estjpgtitle">Dining Room</div>
                            <div className="p-img-card">
                                <img src="./images/Homes/EstateInfo-2c.jpg" alt="" style={{ borderRadius:"0 0 14px 14px", marginBottom:'1rem'}}/>
                            </div>
                            <div className="estjpgtitle">Ocean view</div>
                            <div className="p-img-card">
                                <img src="./images/Homes/EstateInfo-2e1.jpg" alt="" style={{ borderRadius:"0 0 14px 14px"}}/>
                            </div>
                        </div> 
                        <div className="p-hero">
                            <div className="estjpgtitle">Swimming Pool</div>
                            <div className="p-img-card">
                                <img src="./images/Homes/EstateInfo-2b.jpg" alt="" style={{borderRadius:"0 0 14px 14px", marginBottom:'1rem'}}/>
                            </div>
                            <div className="estjpgtitle">Bathroom</div>
                            <div className="p-img-card">
                                <img src="./images/Homes/EstateInfo-2d.jpg" alt="" style={{borderRadius:"0 0 14px 14px", marginBottom:'1rem'}}/>
                            </div>
                            <div className="estjpgtitle">Garden</div>
                            <div className="p-img-card">
                                <img src="./images/Homes/EstateInfo-2f.jpg" alt="" style={{borderRadius:"0 0 14px 14px", marginBottom:'1rem'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
                {/* <div class="estate-body aos-init aos-animate" data-aos="fade-up">
                        <div class="row">
                            <div class="col-8">
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
                            <div className="col-8">
                                <div class="hero-container">
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
                    </div> */}
                
        </>
    )
}