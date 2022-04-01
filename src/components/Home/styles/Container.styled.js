import styled from "styled-components";
import headerbg from './headerbg.svg'

export const Container = styled.div`
width: 100%;
max-width: 1920px;
padding: 0 20px;
margin: 0 auto;
`
export const HeaderContainer = styled.div`
width: 100%;
max-width: 1920px;
padding: 0 20px;
margin: 0 auto;
background-image:url(${headerbg});
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1708px;
  height: 832px;
  margin: 78px 0 49px;
  padding: 27px 27px 27px 103px;
  border-radius: 29px;
  background-color: #02264a;
}
` 

export const CardContainer = styled.div`
width: 670px;
max-width: 100%;
padding: 0 20px;
margin: 0 auto;

@media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 100px;
    text-align: center;
  }
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 auto;
  
  @media(max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:auto 0;
  @media(max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }

`
export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
    justify-content: center;
    align-items: center;
  }

`