import "./Notice.css";
import Slider from "react-slick";
import React, { Component } from "react";
import NewsCard from "./components/NewsCard";
import styled from "styled-components";
import Faq from "./components/Faq";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import './accordion.css'

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding:15px;
`;

const Imagee = styled.img`

  @media(max-width:1466px) {
    display:none;
  }
`

function Notice() {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const NewsList = [
    {
      id: 1,
      title:
        "Discloses Reits DAO’s first investment IPO schedule and fundraising amount.",
      date: "06.11.2022",
    },
    {
      id: 2,
      title: "We are announcing the first investment product of Reits DAO.",
      date: "06.11.2022",
    },
    {
      id: 3,
      title: "Trend Royale 2nd Investment Site Pre-Tour Schedule",
      date: "06.11.2022",
    },
  ];

const items = [
  {
    q: 'What’s the difference between a Basic Sale and Unlimited Sale?',
    a: 'In the Basic Sale, every user can commit a maximum of about 100 USD worth of RBS-BNB LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.In the Unlimited Sale, there’s no limit to the amounts of RBS-BNB LP Tokens you can commit. However, there’s a fee for participation: see below.'
  },
  {
    q: 'Which sale should I commit? Can I do both?',
    a: 'You can choose one or both at the same time! If you’re only committing a small amount, we recommend the Basic Sale first.'
  },
  {
    q: 'How much is the participation fee?',
    a: 'There’s only a participation fee for the Unlimited Sale: there’s no fee for the Basic Sale.The fee will start at 1%.The 1% participation fee decreases in cliffs, based on the percentage of overflow from the “Unlimited” portion of the sale.'
  },
  {
    q: 'Where does the participation fee go?',
    a: 'We burn it. The RBS-BNB LP tokens from the participation fee will be decomposed. We will then use the BNB portion to market buy the RBS equivalent, and finally throw all of the RBS into the weekly token burn.'
  },

]

  return (
    <>
      <div className="notice">
        <div className="notice-1stcontainer">
          <div className="n-headercont">
            <div className="n-headerinside">
              <div className="n-headertitle">Notice</div>
              <div className="n-subtit">
                Notes on Participating in REITs DAO Real Estate IPO
              </div>
              <div className="n-subtit">How to participate in an IPO</div>
              <div className="n-subtit">Investment review sharing event</div>
              <div className="n-subtit">System check guide</div>
            </div>
            <div className="n-topimage">
              <img src="./images/noticeheader.svg" alt="" />
            </div>
          </div>
          <div className="n-title">Medium News</div>
          <div>
          <div className="scontainer">
            <Flex>
              {NewsList.map((items) => (
                <NewsCard title={items.title} date={items.date} />
              ))}
            </Flex>
            </div>
          </div>
        </div>
        <div className="n-bottomtitle">What is the “Overflow” sale method?</div>
        
        <div className="n-overflow">
          {/* <div className="n-bgcircle"></div> */}
          <div className="n-left">
            <div className="n-subtit">
              TLDR: Basically, the more you put in, the more you will get, and
              you’ll get back anything that doesn’t get spent.
            </div>
            <div className="n-subtit">
              In the “Overflow” method, users can subscribe as much or as little
              as they want to the IPO, and their final allocation will be based
              on the amount of funds they put in as a percentage of all funds
              put in by other users at the time the sale ends. Users will
              receive back any leftover funds when they claim their tokens after
              the sale.
            </div>
            <div className="n-subtit">
              “RDF” tokens issue new tokens through Public Mint. The newly
              issued “RDF” will be distributed through an IPO (Initial Public
              Offering) based on the average market price, and if the IPO fails,
              all remaining “RDF” tokens will be burned. The IPO will be done in
              BUSD (BEP-20) by default, but some amount can be entered through
              several different tokens. Participation tokens can be confirmed
              through advance notice.
            </div>
          </div>
          <div className="n-img">
    
            <Imagee src="./images/Images/noticehome.png" alt=""  />
          </div>
        </div>
        <div className="n-faq">F.A.Q.</div>



        <Faq/>
      </div>
    </>
  );
}

export default Notice;



/**
 export default function NavBar() {
  return (
    <Nav>
        <Logo src='./images/flogo.svg' alt='' />
        <Flex >
            {navigation.map((item) => (
              
            ))}
        </Flex>
        <NavbarButton>
            <a href="#contact"></a>
        </NavbarButton>
    </Nav>
 */



// import "./Notice.css";
// import Slider from "react-slick";
// import React, { Component } from "react";
// import NewsCard from "./components/NewsCard";
// import styled from "styled-components";

// export const Flex = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-wrap:wrap;
// `



// function Notice() {
//     const sliderSettings = {
//         dots: true,
//         infinite: false,
//         speed: 250,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         arrows: true,
//         responsive: [
          
//             {
//             breakpoint: 1140,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 2,
//               infinite: true,
//               dots: false,
//             },
//           },
//           {
//             breakpoint: 960,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 2,
//               infinite: true,
//               dots: false,
//             },
//           },
//           {
//             breakpoint: 800,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               infinite: true,
//               dots: true,
//             },
//           },
//         ],
//       }

//       const NewsList = [
//         {
//             id: 1,
//             title: 'Discloses Reits DAO’s first investment IPO schedule and fundraising amount.',
//             date: '06.11.2022',
//         },
//         {
//             id: 2,
//             title: 'We are announcing the first investment product of Reits DAO.',
//             date: '06.11.2022',
//         },
//         {
//             id: 3,
//             title: 'Trend Royale 2nd Investment Site Pre-Tour Schedule',
//             date: '06.11.2022',
//         },
//     ]
//     return(
//         <>  
//             <div className="notice">
//                 <div className="notice-1stcontainer">
//                     <div className="n-headercont">
//                         <div className="headerinside">
//                             <div className="n-headertitle">Notice</div>
//                             <div className="n-subtit">Notes on Participating in REITs DAO Real Estate IPO</div>
//                             <div className="n-subtit">How to participate in an IPO</div>
//                             <div className="n-subtit">Investment review sharing event</div>
//                             <div className="n-subtit">System check guide</div>
//                         </div>
//                         <img src="./images/noticeheader.svg" alt="" />
//                     </div>
//                     <div className="n-title">Medium News</div>
//                         <Flex >
//                               {NewsList.map((items) =>(
//                                   <NewsCard title={items.title} date={items.date} />
                      
//                         ) )  } 
          
//                         </Flex>
//                 </div>
//                 <div className="n-bottomtitle">What is the “Overflow” sale method?</div>
//                 <div className="n-overflow">
//                         {/* <div className="n-bgcircle"></div> */}
//                     <div className="n-left">
//                         <div className="n-subtit">TLDR: Basically, the more you put in, the more you will get, and you’ll get back anything that doesn’t get spent.</div>
//                         <div className="n-subtit">In the “Overflow” method, users can subscribe as much or as little as they want to the IPO, and their final allocation will be based on the amount of funds they put in as a percentage of all funds put in by other users at the time the sale ends. Users will receive back any leftover funds when they claim their tokens after the sale.</div>
//                         <div className="n-subtit">“RDF” tokens issue new tokens through Public Mint. The newly issued “RDF” will be distributed through an IPO (Initial Public Offering) based on the average market price, and if the IPO fails, all remaining “RDF” tokens will be burned. The IPO will be done in BUSD (BEP-20) by default, but some amount can be entered through several different tokens. Participation tokens can be confirmed through advance notice.</div>
//                     </div>
//                     <div className="n-img">
//                         <img src="./images/Images/noticehome.png" alt=""/>
//                     </div>
//                 </div>
//                 <div className="n-faq">F.A.Q.</div>
//                 <div className="n-faqbox">
//                     <div className="n-faqcont">
//                         <div className="n-faqtitle">Can “RDF” be converted into cash immediately?</div>
//                     </div>
//                     <div className="n-faqcont">
//                         <div className="n-faqtitle">Is it possible to sell “RDF” tokens immediately after the public offering closes?</div>
//                     </div>  
//                     <div className="n-faqcont">
//                         <div className="n-faqtitle">Are the assets invested in Ritz Dao Finance safely operated?</div>
//                     </div>  
//                     <div className="n-faqcont">
//                         <div className="n-faqtitle">How is the initial listing price of “RDF” token formed?</div>
//                     </div>  
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Notice;

// /**
//  export default function NavBar() {
//   return (
//     <Nav>
//         <Logo src='./images/flogo.svg' alt='' />
//         <Flex >
//             {navigation.map((item) => (
              
//             ))}
//         </Flex>
//         <NavbarButton>
//             <a href="#contact"></a>
//         </NavbarButton>
//     </Nav>
//  */


// // import "./Notice.css";
// // import Slider from "react-slick";
// // import React, { Component } from "react";
// // import NewsCard from "./components/NewsCard";



// // function Notice() {
// //     const sliderSettings = {
// //         dots: true,
// //         infinite: false,
// //         speed: 250,
// //         slidesToShow: 3,
// //         slidesToScroll: 1,
// //         initialSlide: 0,
// //         arrows: true,
// //         responsive: [
          
// //             {
// //             breakpoint: 1140,
// //             settings: {
// //               slidesToShow: 3,
// //               slidesToScroll: 2,
// //               infinite: true,
// //               dots: false,
// //             },
// //           },
// //           {
// //             breakpoint: 960,
// //             settings: {
// //               slidesToShow: 3,
// //               slidesToScroll: 2,
// //               infinite: true,
// //               dots: false,
// //             },
// //           },
// //           {
// //             breakpoint: 800,
// //             settings: {
// //               slidesToShow: 2,
// //               slidesToScroll: 2,
// //               infinite: true,
// //               dots: true,
// //             },
// //           },
// //         ],
// //       }
// //     return(
// //         <>  
// //             <div className="notice">
// //                 <div className="notice-1stcontainer">
// //                     <div className="n-headercont">
// //                         <div className="headerinside">
// //                             <div className="n-headertitle">Notice</div>
// //                             <div className="n-subtit">Notes on Participating in REITs DAO Real Estate IPO</div>
// //                             <div className="n-subtit">How to participate in an IPO</div>
// //                             <div className="n-subtit">Investment review sharing event</div>
// //                             <div className="n-subtit">System check guide</div>
// //                         </div>
// //                         <img src="./images/noticeheader.svg" alt="" />
// //                     </div>
// //                     <div className="n-title">Medium News</div>
// //                     <Slider {...sliderSettings}><NewsCard/></Slider>
// //                 </div>
// //                 <div className="n-bottomtitle">What is the “Overflow” sale method?</div>
// //                 <div className="n-overflow">
// //                         {/* <div className="n-bgcircle"></div> */}
// //                     <div className="n-left">
// //                         <div className="n-subtit">TLDR: Basically, the more you put in, the more you will get, and you’ll get back anything that doesn’t get spent.</div>
// //                         <div className="n-subtit">In the “Overflow” method, users can subscribe as much or as little as they want to the IPO, and their final allocation will be based on the amount of funds they put in as a percentage of all funds put in by other users at the time the sale ends. Users will receive back any leftover funds when they claim their tokens after the sale.</div>
// //                         <div className="n-subtit">“RDF” tokens issue new tokens through Public Mint. The newly issued “RDF” will be distributed through an IPO (Initial Public Offering) based on the average market price, and if the IPO fails, all remaining “RDF” tokens will be burned. The IPO will be done in BUSD (BEP-20) by default, but some amount can be entered through several different tokens. Participation tokens can be confirmed through advance notice.</div>
// //                     </div>
// //                     <div className="n-img">
// //                         <img src="./images/Images/noticehome.png" alt=""/>
// //                     </div>
// //                 </div>
// //                 <div className="n-faq">F.A.Q.</div>
// //                 <div className="n-faqbox">
// //                     <div className="n-faqcont">
// //                         <div className="n-faqtitle">Can “RDF” be converted into cash immediately?</div>
// //                     </div>
// //                     <div className="n-faqcont">
// //                         <div className="n-faqtitle">Is it possible to sell “RDF” tokens immediately after the public offering closes?</div>
// //                     </div>  
// //                     <div className="n-faqcont">
// //                         <div className="n-faqtitle">Are the assets invested in Ritz Dao Finance safely operated?</div>
// //                     </div>  
// //                     <div className="n-faqcont">
// //                         <div className="n-faqtitle">How is the initial listing price of “RDF” token formed?</div>
// //                     </div>  
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

// // export default Notice;

// // /**
// //  export default function NavBar() {
// //   return (
// //     <Nav>
// //         <Logo src='./images/flogo.svg' alt='' />
// //         <Flex >
// //             {navigation.map((item) => (
              
// //             ))}
// //         </Flex>
// //         <NavbarButton>
// //             <a href="#contact"></a>
// //         </NavbarButton>
// //     </Nav>
// //  */