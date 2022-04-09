import "./Partners.css"

function Partners() {
    return(
        <>
            <div className="Partners-container">
                <div className="p-header">Partners</div>
                <div className="p-iconscontainer">
                    <div className="p-iconcontainer">
                        <div className="p-circle">
                            <img src="./images/partners-icon.svg" alt=""/>
                        </div>
                        <div className="p-comment">Estate Agent</div>
                    </div>
                    <div className="p-iconcontainer">
                        <div className="p-circle">
                            <img src="./images/partners-icon.svg" alt=""/>
                        </div>
                        <div className="p-comment">Accountant</div>
                    </div>
                </div>
                <div className="p-bottompart">
                    <div className="p-title">Defi Partners</div>
                    <div className="p-bigbox">   
                        <div className="p-box">
                            <div className="p-boxtitle">3월 프로젝트</div>
                        </div>
                        <div className="p-box">
                            <div className="p-boxtitle">야나</div>
                        </div>
                        <div className="p-box">
                            <div className="p-boxtitle">허니비</div>
                        </div>
                        <div className="p-box">
                            <div className="p-boxtitle">외</div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Partners;