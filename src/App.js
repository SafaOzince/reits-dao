//import { ThemeProvider } from "styled-components";
//import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import EstateInfo from "./components/EstateInfo";
import WelcomePage from "./components/WelcomePage";
import RdfAdvantages from "./components/RdfAdvantages";
import MainFooter from "./components/MainFooter";
import GlobalStyles from "./components/styles/Global";
import Adventages from "./components/Advantages";
import React from "react";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

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
          <Route path='/' exact />
        </Switch>
        <Home/>
        
        
      </Router>
    </> 
  );
}

export default App;
