//import { ThemeProvider } from "styled-components";
//import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Contact from "./components/Home/Contact";
import EstateInfo from "./components/Home/EstateInfo";
import WelcomePage from "./components/Home/WelcomePage";
import RdfAdvantages from "./components/Home/RdfAdvantages";
import MainFooter from "./components/MainFooter/MainFooter";
import GlobalStyles from "./components/Home/styles/Global";
import Adventages from "./components/Home/Advantages";
import React from "react";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import "./fonts/ndastroneer.ttf";
import Partners from "./components/Partners/Partners";
import Defi from "./components/Defi/Defi";
import Notice from "./components/Notice/Notice";
import EstateTrendroyal from "./components/EstateTrendroyal/EstateTrendroyal";
import Homes from "./components/Homes/Homes";

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
        <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Homes}/>
          <Route path='/estateinfo' exact component={EstateTrendroyal}/>
          <Route path='/defi' exact component={Defi}/>
          <Route path='/partners' exact component={Partners}/>
          <Route path='/notice' exact component={Notice}/>
        </Switch>
        
        {/* <Home/> */}
        {/* <Partners/> */}
        <MainFooter/>
      </Router>
      {/* <MainFooter/> */}
    </> 
  );
}

export default App;
