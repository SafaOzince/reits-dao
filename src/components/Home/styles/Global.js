import { createGlobalStyle } from "styled-components";
import "./Global.css"

const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
}

body {
    background: ${({ theme }) => theme.colors.body};
    margin: 0;
}

`
//font-family: NDAstroneer-Regular;


export default GlobalStyles