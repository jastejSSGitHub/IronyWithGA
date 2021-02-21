import React from 'react'
import "../components/FontAwesomeIcons"
import '../styles/components/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route , Switch, NavLink, Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
import Tournaments from './Tournaments'
import HowItWorks from './HowItWorks'
import Lobby from './Lobby'
import ScrollToTop from './ScrollToTop'
import FreeFire from './FreeFire'


function NavBar() {
    return (
            
            <div className="navBar">
                <div className="navContainer">
                    <div className="nav">
                        <div className="nav__left">
                                <Link to="/">
                                    <img src="https://i.ibb.co/h7jg8YF/navLogo.png" alt="navLogo" border="0"/>
                                </Link>
                            
                        </div>
                        <div className="nav__middle">
                            <NavLink exact to="/" className="notSelected" activeClassName="selected">
                                Lobby
                            </NavLink>
                            <NavLink exact  className="notSelected" to="/tournaments" activeClassName="selected">
                                Tournaments
                            </NavLink>
                            
                           
                        </div>
                        
                        <div className="nav__right">
                        {/*<Link  to="/">
                            <img class="discordImage" src="https://i.ibb.co/F6n1SwT/image-3.png" alt="navLogo" border="0"/>
                        </Link>*/}
                        <Link id="getStartedLink" to="/Login">
                            <button class="button" id="SignUpButton"variant="contained" color="primary">
                                LOGIN IN
                            </button>
                        </Link>

                        
                        </div>

                    </div>
                </div>
            </div>

    
    )
}

export default NavBar
