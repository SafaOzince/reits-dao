import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import EstateInfo from "./components/EstateInfo";
import WelcomePage from "./components/WelcomePage";
import RdfAdvantages from "./components/RdfAdvantages";
import MainFooter from "./components/MainFooter";
import GlobalStyles from "./components/styles/Global";
import Adventages from "./components/Advantages";


const theme = {
  colors:{
    header: '#02264a',
    body: '#fff',
    footer: '#011a34',
    contactbutton: '#29527b',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
      <GlobalStyles/>
      <NavBar/>
      <Header/>
      <WelcomePage/>
      <RdfAdvantages/>
      <Adventages/>
      <EstateInfo/>
      <Contact/>
      <MainFooter/>
    </>
    </ThemeProvider>
  );
}

export default App;
