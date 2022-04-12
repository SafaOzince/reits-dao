import "./Lastcontact.css"



export default function Lastcontact() {
    return (
        <>   
        <div className="scontainer">
        <div className="contactcontainer">
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
                </div>
                </> 
    )
}