import "./Main.css"
import Welcome from "./components/Welcome.js";
import Headsec from "./components/Headsec";
import Rdfadv from "./components/Rdfadv";
import Rdfopportunity from "./components/Rdfopportunity";
import Rdfextra from "./components/Rdfextra";
import Maincards from "./components/Maincards";
import Projectcard from "./components/Projectcard";
import Lastcontact from "./components/Lastcontact";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Main() {
    return (
        <>  
            <section id="section-One" className="section-One aos-init aos-animate" data-aos="zoom-out">
                <Welcome/>
            </section>
            <section id="section-Two" className="section-Two">
                <Headsec/>
            </section>
            <section id="section-Thre" className="section-Thre aos-init aos-animate" data-aos="fade-up">
                <Rdfadv/>
            </section>
            <section id="section-Four" className="section-Four aos-init aos-animate" data-aos="zoom-out">
                <Rdfopportunity/>
            </section>
            <section id="section-Five" className="section-Five aos-init aos-animate" data-aos="fade-up" >
                <Rdfextra/>
            </section>
            <section id="section-Six" className="section-Six">
                <Maincards/>
            </section>
            <section id="section-Eight" class="section-Eight aos-init aos-animate" data-aos="fade-up">
                <Projectcard/>
            </section>
            <section id="contact" className="contact">
                <Lastcontact/>
            </section>
        
        </>
   
    )

}




