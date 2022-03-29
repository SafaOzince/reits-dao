import styled from "styled-components";
import buttonbg from './buttonbg.svg';
import navbarbutton from './navbutton.png';

export const Button = styled.button`
  width: 211px;
  height: 91px;
  
  object-fit: contain;
  border-image: url(${buttonbg}) 5 stretch;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 10px;
  }

`
export const NavbarButton = styled.button`
  width: 165px;
  height: 61px;
  background-image: url(${ navbarbutton });
  object-fit: contain;

`

export const StyledButton = styled.button`
  width: 555px;
  height: 117px;
  margin: 0.8px 0 0.4px 21.5px;
  padding: 38px 61.3px 28.6px 29.4px;
  border-radius: 15px;
  background-color: #fd6c21;
  color: #fff;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 10px;
  }

`
export const ContactButton = styled.button`
  width: 89%;
  height: 77px;
  margin: 30px;
  border-style : solid;
  border-color: rgba(200, 200, 200, 0.25);
  border-width: 2px;
  border-radius: 12px;
  padding: 23.7px 334.3px 28.1px 335.1px;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.16);
  background-color: ${({ theme }) => theme.colors.contactbutton};
  color: #fff;
  object-fit: contain;
  
  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
    max-width: 500px;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

`

// border-radius: 50px;
//   border: none;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: 700;
//   padding: 15px 60px;
//   background-color: ${({bg}) => bg || '#fff'};
//   color: ${({color}) => color || '#333'};

//   &:hover {
//       opacity: 0.9;
//       transform: scale(0.98);
//   }
