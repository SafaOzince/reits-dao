import styled from "styled-components";

export const StyledEstateInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #001a34;
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 80px;
 

  @media(max-width: ${({ theme }) => theme.mobile}) {
    
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
`