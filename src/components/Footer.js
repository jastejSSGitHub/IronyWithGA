import React from 'react'
import '../styles/components/Footer.css'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


function Footer() {

    return (
        <div className="footer">
                <div className="rectangleBackground">
                
                    <div className="flexContainer">
                    
                        <div className="row">
                            <div className="heading">
                                <h1>About</h1>
                            </div>
                            <ul>
                                <li>How It Works</li>
                                <li>Get Started with TWITCH</li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="heading">
                                    <h1>Support</h1>
                                </div>
                                <ul>
                                    <li>FAQ</li>
                                </ul>
                        </div>
                        <div className="row">
                            <div className="heading">
                                    <h1>Legal</h1>
                                </div>
                                <ul>
                                    <li>Privacy Policy</li>
                                    <li>Cookie Policy</li>
                                    <li>Terms of Service</li>
                                </ul>
                        </div>
                        
                    </div>
                    
                    
            </div> 
                    
        </div>
    )
}

export default Footer
