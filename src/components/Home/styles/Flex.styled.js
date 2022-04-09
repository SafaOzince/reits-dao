import styled from "styled-components";

export const Flex= styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  & > div,
  & > ul{
      flex: 1;
  }

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
  
`