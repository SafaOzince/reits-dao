import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
}

body {
    background: ${({ theme }) => theme.colors.body};
    font-family: NDAstroneer;
    margin: 0;
}

`

export default GlobalStyles