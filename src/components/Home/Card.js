import styled from "styled-components"

export const CContainer = styled.div`
  width: 465px;
  min-height: 543px;
  margin: 0 35px 0 0;
  padding: 0 0 67px;
  border-radius: 25px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin-bottom:35px;
    text-align: center;
  }
`
export const CsContainer = styled.div`
width: 465px;
height: 289px;
margin: 0 0 43px;
padding: 80px 160.7px 62.4px 160px;
border-radius: 25px 25px 0 0;
background-color: #ffe7bf;

`
export const Cs2Container = styled.div`
width: 465px;
height: 289px;
margin: 0 0 43px;
padding: 80px 160.7px 62.4px 160px;
border-radius: 25px 25px 0 0;
background-color: #eafdff;
`
export const Cs3Container = styled.div`
width: 465px;
height: 289px;
margin: 0 0 43px;
padding: 80px 160.7px 62.4px 160px;
border-radius: 25px 25px 0 0;
background-color: #eaf3ff;
`

const content = [
    {
        id:1,
       
        // body: {
        //     intro:'First real estate to be introduced on-chain via ReitsDAO',
        //     subtitle: 'INFO',
        //     infoitems: {
        //         k:'Property Type:',
        //         l:'Lot Size:'  ,
        //         m:'Rental Yield:',
        //         n:'Year built:',
        //         o:'Rental Escalation:',
        //         },
        //     endtite: 'Related Notice',
        // }, 
        //image: 'Group-9124.svg',
        color: '#ffe7bf',
        //title: 'Small Investment Possible',    
    },
    {
        id:2,
        
        // body: {
        //     intro:'First real estate to be introduced on-chain via ReitsDAO',
        //     subtitle: 'INFO',
        //     infoitems: {
        //         k:'Property Type:',
        //         l:'Lot Size:'  ,
        //         m:'Rental Yield:',
        //         n:'Year built:',
        //         o:'Rental Escalation:',
        //         },
        //     endtite: 'Related Notice', #eaf3ff
        // }, 
       // image: 'Group-9125.svg',
        color: '#eafdff', 
       // title: 'Subscription Method Funding',   
    },
    {
        id:3,
        
        // body: {
        //     intro:'First real estate to be introduced on-chain via ReitsDAO',
        //     subtitle: 'INFO',
        //     infoitems: {
        //         k:'Property Type:',
        //         l:'Lot Size:'  ,
        //         m:'Rental Yield:',
        //         n:'Year built:',
        //         o:'Rental Escalation:',
        //         },
        //     endtite: 'Related Notice', #eaf3ff
        // }, 
       // image: 'Group-9126.svg',
        color: '#eaf3ff', 
       // title: 'Passing Revenue with Token Buyback',   
    },
] 

//{item: { id, image, color, title  }}

export default function Card() {
    return(

        <CContainer>
            <CsContainer>
                <img src={'./images/CardImages/Group-9124.svg'} alt=""/>
            </CsContainer>
            <div>
                <h2>Small Investment Possible</h2>
            </div>
        </CContainer>
        
    )
}
