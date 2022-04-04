import styled from "styled-components";
import welcomebg from "./welcome-bg.png"

export const StyledWelcome = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 60px;
  background-image:url(${welcomebg});
  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
  
`