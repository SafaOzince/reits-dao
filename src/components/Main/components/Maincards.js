import "./Maincards.css"

export default function Maincards() {
    return (
        <>
        <div className="scontainer">
            <div className="lightcontainertrans">
                <div className="cardwrap">
                    <div className="col-lg-4 p-lg-3 sc6wdl aos-init aos-animate" data-aos="zoom-in">
                        <div className="main-card bgorange">
                                <div className="card-head">
                                    <div className="img-card">
                                        <img src="./images/Homes/Section-six-1.png" />
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div className="cardtext-1">
                                        Small <br/> Investment
                                        <br/> Possible
                                    </div>
                                </div>
                            </div>
                </div>

                <div class="col-lg-4 p-lg-3 sc6wdl aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
                    <div class="main-card bggreen">
                        <div class="card-head">
                            <div className="img-card">
                            <img src="./images/Homes/Section-six-2.png" />
                            </div>
                        </div>

                        <div class="card-body">
                            <div className="cardtext-1">
                                Subscription <br/> method <br/> funding
                            </div>
                        </div>
                    </div>
                </div>

                        <div class="col-lg-4 p-lg-3 sc6wdl aos-init aos-animate" data-aos="zoom-in" data-aos-delay="600">
                            <div class="main-card bgblue">

                                <div class="card-head">
                                    <div className="img-card">
                                    <img src="./images/Homes/Section-six-3.png" />
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div className="cardtext-1">
                                        Passing Revenue <br/> with Token <br/> Buyback
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}