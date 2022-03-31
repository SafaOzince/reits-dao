import styled from "styled-components";

export const StyledWelcome = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 60px;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
  
`