import "./Homes.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initclassNameName: 'aos-init', // className applied after initialization
  animatedclassNameName: 'aos-animate', // className applied on animation
  useclassNameNames: false, // if true, will add content of `data-aos` as classNamees on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function Homes() {
    return(
        <>
             {/* Section 1 */}
            <section id="sectionOne" className="sectionOne aos-init aos-animate" data-aos="zoom-out">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center wdl">
                            <div className="section-one-side-left d-flex d-lg-block flex-column align-items-center text-lg-start text-center">
                                <h1>
                                    Find Your Best Smart Real Estate
                                </h1>
                                <a href="/estateinfo">Get Your One</a>
                            </div>
                        </div>
                        <div className="col-lg-6 wdr">
                            <div className="section-one-side-right mt-5 mt-lg-0">
                                <img className="img-fluid" src='./images/Homes/Home-villa.png' alt="" style={{maxWidth:'70%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 1 End*/}
            {/* Section 2 */}
            <section id="sectionTwo" className="sectionTwo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 sc2wdl aos-init aos-animate " data-aos="fade-right">
                            <div className="section-two-left pe-lg-5">
                                <h1>Reits Dao Finance</h1>
                                <p>ReitsDAO is a service operated by Blokfield.Inc and is a decentralized real estate investment product service with real estate tokens linked to real assets on the BSC blockchain network.
                                </p>
                                <img className="img-fluid" src="./images/Homes/Section-two-png-2.png" alt="" style={{maxWidth:'80%'}}/>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0 sc2wdr aos-init aos-animate" data-aos="fade-left">
                            <div className="section-two-right ps-lg-5">
                                <img className="img-fluid" src="./images/Homes/Section-two-png-1.png" alt="" style={{maxWidth:'80%'}}/>
                                <p>ReitsDAO’s token economy model is designed to be very simple. ReitsDAO issues “RDF” tokens that are collateralized with real estate values, and “RDF” tokens reflect the value and revenue of all real estate owned by ReitsDAO. Therefore,
                                    the value of “RDF” token can be said to be the sum of all real estate values and profits owned by ReitsDAO. ReitsDAO does not issue new tokens reflecting each real estate value and is managed only as “RDF”.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 2 End */}
            {/* Section 3 */}
            <section id="sectionThre" className="section-thre aos-init aos-animate" data-aos="fade-up">
                <div className="container">
                    <div className="customer">
                        <h1>RDF Adventages</h1>
                        <div className="text-center">
                            <p>Market Profit</p>
                            <p>Rental Income</p>
                        </div>
                        <img src="./images//Homes/Section-thre-photo.png" className="img-fluid img-center" alt="" style={{maxWidth:'75%'}}/>
                        <div className="row content">
                            <div className="col-lg-6 pe-lg-5 sc3wdl">
                                <p className="mb-5">
                                    Based on the long-term analysis of Kusadasi, a resort town in western Turkey, we purchase real estate (villas, apartments, shopping malls) based on location conditions and profitability. The rental income generated through this is linked to revenue by
                                    increasing the token value on a regular basis.
                                </p>
                                <p>
                                    One of the most differentiated models of ReitsDAO from the existing system is probably the buy-back system, not the dividend system. The rental income generated from the real estate owned by ReitsDAO is not distributed and is designed as a system to Buy-Back
                                    “RDF” in the market. In the case of the dividend system, real estate rental income can be continuously distributed in USD value, which can be attractive to users, but it is not suitable for the ReitsDAO system where many users
                                    can participate..
                                </p>
                            </div>
                            <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-5 sc3wdl">
                                <p>Due to the characteristics of the blockchain system, as the number of “RDF” token holders increases, the network fee borne by ReitsDAO will increase, and the dividend income that holders can actually receive will decrease. In addition,
                                the participation of bots that purchase and sell tokens only during the dividend period increases and the possibility of abuse is very high. In the case of a dividend system, it can be an advantage if it consists of a small
                                number of investors, but it is not a good token economy model for the ReitsDAO system, where small investments are possible and there are many participants.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3 End */}
            {/* Section 4 */}
            <section id="sectionFour" className="sectionFour aos-init aos-animate" data-aos="zoom-out">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 section-four-left sc4wdl">
                            <h2>
                                RDF Adventages
                            </h2>
                            <h1>
                                Opportunity Cost Reduction
                            </h1>
                            <div className="row photo-item">
                                <div className="col-lg-4">
                                    <h3>Opportunity <br/> Cost</h3>
                                </div>
                                <div className="col-lg-8 text-center text-lg-end">
                                    <img className="img-fluid" src="./images/Homes/Section-four-leftphoto.png" alt="" style={{maxWidth:'75%'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 d-flex align-items-center justify-content-center mt-5 mb-5 mt-lg-0 mb-lg-0 sc4wd-center">
                            <h1 className="vs">VS</h1>
                        </div>
                        <div className="col-lg-5 section-four-right justify-content-end sc4wdl">
                            <h3>Financal <br/>Liquidty</h3>
                            <img src="./images/Homes/section-four-rightphoto.png" alt="" style={{maxWidth:'60%'}}/>
                            <p>In the case of general real estate investment, there is a disadvantage of insufficient liquidity. By tokenizing the value of real estate, small investment is possible and loss of opportunity cost can be minimized.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 4 End */}
            {/* Section 5 */}
            <section id="sectionFive" className="sectionFive aos-init aos-animate" data-aos="fade-up" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 px-5 sc5wdl">
                            <img className="img-fluid" src="./images/Homes/Section-Five-Photo.png" style={{maxWidth:'80%'}}/>
                        </div>
                        <div className="col-lg-6 px-5 align-self-center mt-lg-0 mt-5 sc5wdl">
                            <h2>RDF Adventages</h2>
                            <h1>Extra Income</h1>
                            <p>Tokens issued while investing in real estate generate continuous interest income through the DeFi service, so you can expect maximum efficiency in fund management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 5 End */}
            {/* Section 6 */}
            <section id="sectionSix" class="sectionSix">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 p-5 p-lg-3 sc6wdl aos-init aos-animate" data-aos="zoom-in">
                            <div class="main-card bgorange">
                                <div class="card-head">
                                    <img class="img-fluid" src="./images/Homes/Section-six-1.png" style={{maxWidth:'40%'}}/>
                                </div>

                                <div class="card-body">
                                    <h2>
                                        Small <br/> Investment
                                        <br/> Possible
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 p-5 p-lg-3 sc6wdl aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
                            <div class="main-card bggreen">

                                <div class="card-head">
                                    <img class="img-fluid" src="./images/Homes/Section-six-2.png" style={{maxWidth:'40%'}}/>
                                </div>

                                <div class="card-body">
                                    <h2>
                                        Subscription <br/> method <br/> funding
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 p-5 p-lg-3 sc6wdl aos-init aos-animate" data-aos="zoom-in" data-aos-delay="600">
                            <div class="main-card bgblue">

                                <div class="card-head">
                                    <img class="img-fluid" src="./images/Homes/Section-six-3.png" style={{maxWidth:'40%'}}/>
                                </div>

                                <div class="card-body">
                                    <h2>
                                        Passing Revenue <br/> with Token <br/> Buyback
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 6 End */}
            {/* Section 8 */}
            <section id="sectionEight" class="sectionEight aos-init aos-animate" data-aos="fade-up">
                <div class="container-fluid padding">
                    <h1 class="title mb-5">Estate Info</h1>
                    {/* <div class="estate-body aos-init aos-animate" data-aos="fade-up">
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
                                   
                                    <h4 class="pt-5 d-md-block">Related Notice</h4>
                                </div>
                            </div>
                            <div class="col-xxl-7 side-right m-auto">
                                <img class="img-fluid" src="./images/Homes/EstateInfo-1.png" alt="" style={{maxWidth:'85%'}}/>
                            </div>
                        </div>
                    </div> */}

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
                                <img className="img-fluid" src="./images/Homes/EstateInfo-2.png" alt="" style={{maxWidth:'80%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 8 End */}
            {/* Section Contact */}
            <section id="contact" className="contact">
                <div className="container">
                    <h1 className="text-center mb-5">Contact</h1>
                    <form className="form">
                        <div className="row1 justify-content-center">
                            <div className="col-lg-4 form-column">
                                <div className="form-group">
                                    <input type="text" name="" id="" className="form-control" placeholder="Your name"/>
                                </div>
                            </div>
                            <div className="col-lg-4 form-column">
                                <div className="form-group">
                                    <input type="text" name="" id="" className="form-control" placeholder="Sur name"/>
                                </div>
                            </div>
                            <div className="col-lg-8 form-column">
                                <div className="form-group">
                                    <input type="text" name="" id="" className="form-control" placeholder="Mail"/>
                                </div>
                            </div>
                            <div className="col-lg-8 form-column">
                                <div className="form-group">
                                    <input type="text" name="" id="" className="form-control" placeholder="Phone"/>
                                </div>
                            </div>
                            <div className="col-lg-8 form-column">
                                <div className="form-group">
                                    <textarea className="form-control" name="" id="" rows="6" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-8"><button className="btncustom w-100 p-3">Send</button></div>
                        </div>
                    </form>
                </div>
            </section>
            {/* Section Contact End */}
        </>
    )
}

export default Homes;