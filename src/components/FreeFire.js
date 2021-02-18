import React from 'react'
import { Router, Route } from 'react-router'
import Footer from './Footer'
import '../styles/components/FreeFire.css'
import { useHistory } from "react-router-dom";

function FreeFire() {
    const history = useHistory();

    return (
            <div className="freeFire">
                <div className="bannerDeatilsPage">
                    <div className="topBanner">
                        <div className="topBannerButton" 
                         onClick={() => history.push("/Tournaments", { from: "HomePage" })}>
                            <img src="https://i.ibb.co/drC9wJv/back-Button.png" alt="back-Button" border="0"/>
                        </div>
                        <div className="bannerHeading">
                            <h1>Free Fire Tournament</h1>
                        </div>
                    </div>
                    
                    <div data-aos='fade-right'className="GameBannerImage">
                        <img src="https://i.ibb.co/yn0XXh1/banner-Image-2.png" alt="banner-Image-2" border="0" />
                        
                    </div>
                </div>
                <div className="content">
                    <div className="content__top">
                        <div className="content__topRow">
                            <div className="row__left">
                                <div className="tag">
                                    <h2>ONGOING</h2>
                                </div>
                            </div>
                            <div className="row__right">
                                <h3>Start</h3>
                                <h2>Feb 26</h2>
                                <h3>12:00pm</h3>
                            </div>
                        </div>
                        <div className="content__BottomRow">
                            <div className="row__left">
                                <div className="tag">
                                    <h2>TRACKED</h2>
                                </div>
                            </div>
                            <div className="row__right">
                                <h3>End</h3>
                                <h2>Jan 02</h2>
                                <h3>12:00pm</h3>
                            </div>
                        </div>
                        <div className="content__buttonContainer">
                            <button>
                                FREE | ENTER
                            </button>
                        </div>
                    </div>

                    <div className="content__bottom">
                        <div className="box">
                            <div className="box__section">
                                <div className="box__heading">
                                    <h1>Entry Fee</h1>
                                </div>
                                <div className="box__sectionContent">
                                    <div className="box__sectionContentMini">
                                        <h2>First Time Entry</h2>
                                        <h3>Free</h3>
                                    </div>
                                    <div className="box__sectionContentMini">
                                        <h2>Re-entry</h2>
                                        <h3>Free</h3>
                                    </div>
                                </div>
                            </div> {/*Section 1 within the box*/}
                            <div className="horizontalline">
                                <hr/>
                            </div>

                            
                            <div className="box__section">
                                <div className="box__heading">
                                    <h1>Prize Pool</h1>
                                </div>
                                <div className="box__sectionContent">
                                    <div className="box__sectionContentMini">
                                        <h2 id="prize">INR 100,000</h2>
                                    </div>
                                    
                                </div>
                            </div> {/*Section 2 within the box*/}
                            <div className="horizontalline">
                                <hr/>
                            </div>

                            <div id="sectionEnd"className="box__section">
                                <div className="box__heading">
                                    <h1>Entry Fee</h1>
                                </div>
                                <div className="box__sectionContent">
                                    <div className="box__sectionContentMini">
                                        <h2>Format</h2>
                                        <h3>Multiplayer</h3>
                                    </div>
                                    <div className="box__sectionContentMini">
                                        <h2>Type</h2>
                                        <h3>Contest</h3>
                                    </div>
                                    <div className="box__sectionContentMini">
                                        <h2>How to Win</h2>
                                        <h3>Best Score</h3>
                                    </div>
                                </div>
                            </div> {/*Section 1 within the box*/}

                        </div>
                        <div className="box">
                            <div className="box__heading">
                                <h1>Rules</h1>
                                <ul>
                                    <li>- Select Match Type : Competetive</li>
                                    <li>- Eliminations Achieved in a single game will be your entry </li>
                                    <li>- No Smurfing Allowed: No accounts other than your main</li>
                                    <li>- Must have at least 1 elimination for entry to be valid</li>
                                    <li>- No Glitching, Cheating, or Boosting allowed</li>
                                    <li>- Must start your entry before the gameplay starts</li>
                                    <li>- You must show your score for 10 seconds</li>
                                    <li>- Unlimited Free Re-entries</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            
            <Footer/>

        </div> 
       
    )
}

export default FreeFire
