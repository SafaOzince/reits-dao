import React, {useState, useEffect} from "react";
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
                            <Link to="/estateinfo" className="nav-links" onClick={closeMobileMenu}>
                                Estate Info 
                            </Link>
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
                            <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>
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
