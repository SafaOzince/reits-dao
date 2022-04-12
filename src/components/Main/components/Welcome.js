import "./Welcome.css"



export default function WelcomePage() {
    return (    
         //<div className="conta-iner">
        //     <div className="box1">
        
        //     </div>
        // </div>
    <div className="scontainer">
     <div class="container1">
         
         <div class="col-6">
             
             <div class="hero-container">
                 <div class="title">
                     Find Your Best Smart Real Estate
                 </div>
                 <div class="button-container">
                     {/* <button class="secondary"> */}
                         <a class="secondary" href="/estateinfo">Get Your One</a>
                     {/* </button> */}
                 </div>

             </div>
         </div>
         <div class="col-6">
             <div class="img-card centralize">
                 <img src="https://reits-dao.vercel.app/images/Homes/Home-villa.png" alt=""/>
                 {/* './images/Homes/Home-villa.png' */}
             </div>
         </div>
         {/* <div style={{background:"red"}}><span style={{background:"yellow"}}>asdf</span>
            <span style={{background:"pink"}}>asdf</span>
            <h1 style={{background:"blue"}} > asdsadasdasd</h1>
         </div>*/}
        </div>
     </div> 
        
)
}