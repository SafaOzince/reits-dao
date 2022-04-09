import styled from "styled-components";

const theme = {
    colors:{
      header: '#02264a',
      body: '#fff',
      footer: '#011a34',
      contactbutton: '#29527b',
    },
    mobile: '768px',
  }
  
export const StyledMainFooter = styled.footer`
  background-color: #011a34;  
  color: #fff;
  padding: 100px 0 60px;

  ul {
      list-style-type: none;
  }

  ul li{
      margin-bottom: 20px;
  }

  p{
      text-align:left;
  }

  @media screen and (max-width: 992px) {
    padding: 70px 0 30px;
  }
  
  @media screen and (max-width: 540px) {
    padding: 40px 0 26px;
      text-align: center;
      ul {
          padding: 0;
      }
      p{
          text-align: center;
      }
  }

`