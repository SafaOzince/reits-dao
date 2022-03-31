import { ThemeProvider } from "styled-components";
// import NavBar from "./components/NavBar";
import Header from "./Header";
import Contact from "./Contact";
import EstateInfo from "./EstateInfo";
import WelcomePage from "./WelcomePage";
import RdfAdvantages from "./RdfAdvantages";
import MainFooter from "../MainFooter/MainFooter";
import GlobalStyles from "./styles/Global";
import Adventages from "./Advantages";


const theme = {
  colors:{
    header: '#02264a',
    body: '#fff',
    footer: '#011a34',
    contactbutton: '#29527b',
  },
  mobile: '768px',
}

function Home() {
  return (
    <ThemeProvider theme = {theme}>
    <>
      {/* <GlobalStyles/> */}
      {/* <NavBar/> */}
      <Header/>
      <WelcomePage/>
      <RdfAdvantages/>
      <Adventages/>
      <EstateInfo/>
      <Contact/>
      
    </>
    </ThemeProvider>
  );
}

export default Home;