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
  padding: 36px 0 24px;

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
    padding: 36px 0 16px;
  }
  
  @media screen and (max-width: 540px) {
    padding: 28px 0 12px;
      text-align: center;
      ul {
          padding: 0;
      }
      p{
          text-align: center;
      }
  }

`