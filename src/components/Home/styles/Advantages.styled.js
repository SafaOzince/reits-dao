import styled from "styled-components";

export const StyledAdvantages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 60px;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
  
`
export const StyledAdvantages1 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #02264a;
  color: #fff;
  padding: 60px;
  margin-bottom:20px;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
  
`