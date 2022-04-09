import React, {useState, useEffect} from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";
import './NavBar.css';
import { Button } from './components/Button';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    
                    <Link to="/" className="navbar-logo">
                      <img src="./images/logo-1.svg" alt=""/>
                      <i class="fab fa-typo3" />
                    </Link>
                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className= "nav-item">
                            
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Business Overview
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                          <div className="dropdown">
                            <Link to="" className="nav-links" onClick={closeMobileMenu}>
                             Estate Info     
                            </Link>
                                  <div class="dropdown-content">
                                    <a href="/estateinfo">Trend Royal 2</a>
                                    <a href="/estateinfo">2nd Project</a>
                                    <a href="/estateinfo">3rd Project</a>
                                  </div>
                          </div>
                        </li>
                        <li className="nav-item">
                            
                            <Link to="/defi" className="nav-links" onClick={closeMobileMenu}>
                                Defi
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            
                            <Link to="/partners" className="nav-links" onClick={closeMobileMenu}>
                                Partners
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            
                            <Link to="/notice" className="nav-links" onClick={closeMobileMenu}>
                                Notice
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Contact</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar

/*
import { Nav, Logo } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled"
import { NavbarButton } from "./styles/Button.styled"


const navigation = [
    { name: "Business Overview",
      href: "#projects" 
    },
    { name: "Estate Info",
      items: [
        {
          name: "Trend Royal 2",
          href: "#partners",
        },
        {
          name: "2nd Project",
          href: "#partners",
        },
        {
          name: "3rd Project",
          href: "#partners",
        },
      ],
    },
    { name: "Defi", 
      href: "#about" 
    },
    { name: "Partners",
      href: "#whatwedo" 
    },
    { name: "Notice",
      href: "#about" 
    },
  ];

export default function NavBar() {
  return (
    <Nav>
        <Logo src='./images/flogo.svg' alt='' />
        <Flex >
            {navigation.map((item) => (
              <ul>
                <li>
                  <a href={item.href}>{item.name}</a>
                </li>
              </ul>
            ))}
        </Flex>
        <NavbarButton>
            <a href="#contact"></a>
        </NavbarButton>
    </Nav>
  )
}

*/