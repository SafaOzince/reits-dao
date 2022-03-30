import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
    font-family: NDAstroneer-Regular;
}

body {
    background: ${({ theme }) => theme.colors.body};
    font-family: NDAstroneer-Regular;
    margin: 0;
}

`

export default GlobalStyles