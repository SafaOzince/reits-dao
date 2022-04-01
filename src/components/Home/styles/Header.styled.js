import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
  color: #fff;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 44.1px 106px 28.3px;
  
  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }

`

export const Logo = styled.img`
  @media(max-width: ${({ theme }) => theme.mobile}) {
  margin-bottom: 40px;
} 

`

export const Image= styled.img`
  width: 100%;
  max-width: 715px;
  height: 604px;
  margin: 81px 81px 81px 146.1px;
  padding: 19.5px 17.4px 19.4px 5.3px;
  object-fit: contain;
  border-radius: 21px;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 85%;
    margin: 20px 0 15px;
  }
`
