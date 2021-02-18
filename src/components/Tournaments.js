import React from 'react'
import NavBar from './NavBar'; 
import '../styles/components/Tournaments.css' //CSS file of this component
import Carousel from 'react-multi-carousel'; //top carousel 
import 'react-multi-carousel/lib/styles.css';
import { Link, NavLink } from 'react-router-dom'; 
import TournamentItem from './TournamentItem';
import TournamentCardHover from './TournamentCardHover'; //component that gets rendered on hovering on tournament card compnent 
import {game1Row1Selector, game2Row1Selector, game3Row1Selector, game4Row1Selector,
        game1Row2Selector, game2Row2Selector, game3Row2Selector, game4Row2Selector,
        game1Row3Selector, game2Row3Selector, game3Row3Selector, game4Row3Selector,
        game1Row4Selector, game2Row4Selector, game3Row4Selector, game4Row4Selector,} 
        from '../features/hoverSlice' //importing redux selectors
import {game1Row1ReducerOn,game1Row1ReducerOff,game2Row1ReducerOn,game2Row1ReducerOff,game3Row1ReducerOn,game3Row1ReducerOff,game4Row1ReducerOn, game4Row1ReducerOff,
        game1Row2ReducerOn,game1Row2ReducerOff,game2Row2ReducerOn,game2Row2ReducerOff,game3Row2ReducerOn,game3Row2ReducerOff,game4Row2ReducerOn, game4Row2ReducerOff,
        game1Row3ReducerOn,game1Row3ReducerOff,game2Row3ReducerOn,game2Row3ReducerOff,game3Row3ReducerOn,game3Row3ReducerOff,game4Row3ReducerOn, game4Row3ReducerOff,
        game1Row4ReducerOn,game1Row4ReducerOff,game2Row4ReducerOn,game2Row4ReducerOff,game3Row4ReducerOn,game3Row4ReducerOff,game4Row4ReducerOn, game4Row4ReducerOff,
    }
        from '../features/hoverSlice' //importing reducers from redux
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import Footer from './Footer';



function Tournaments() {
    const responsive = { //code for breakpoints of react carousel
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      //Redux selectors 
      const projectOneIsHovered = useSelector(game1Row1Selector);
      const projectTwoIsHovered = useSelector(game2Row1Selector);
      const projectThreeIsHovered = useSelector(game3Row1Selector);
      const projectFourIsHovered = useSelector(game4Row1Selector);
      //selectors for 2nd row (4 games)
      const projectFiveIsHovered = useSelector(game1Row2Selector);
      const projectSixIsHovered = useSelector(game2Row2Selector);
      const projectSevenIsHovered = useSelector(game3Row2Selector);
      const projectEightIsHovered = useSelector(game4Row2Selector);
      //selectors for 3rd row (4 games)
      const projectNineIsHovered = useSelector(game1Row3Selector);
      const projectTenIsHovered = useSelector(game2Row3Selector);
      const projectElevenIsHovered = useSelector(game3Row3Selector);
      const projectTwelveIsHovered = useSelector(game4Row3Selector);
      //selectors for 4th row (4 games)
      const projectThirteenIsHovered = useSelector(game1Row4Selector);
      const projectFourteenIsHovered = useSelector(game2Row4Selector);
      const projectFifteenIsHovered = useSelector(game3Row4Selector);
      const projectSixteenIsHovered = useSelector(game4Row4Selector);




      const dispatch = useDispatch();

      
    return (
        <div className="tournaments">
            <div className="banner">
                <h2>Tournaments</h2> 
            </div>

            <div className="carouselContainer">
                <Carousel className="carousel" responsive={responsive}>
                    <div id="noScrollFreeFire"><img src="https://i.ibb.co/1LLk0d1/FreeFire.png" alt="FreeFire" border="0"/></div>
                    <div><img src="https://i.ibb.co/4VH5nGD/cod.png" alt="cod" border="0"/></div>
                    <div id="noScroll"><img src="https://i.ibb.co/StCZxv0/dota.png" alt="dota" border="0"/></div>
                    <div><img src="https://i.ibb.co/MVz5F5F/FauG.png" alt="FauG" border="0"/></div>
                    <div><img src="https://i.ibb.co/DQnsJR9/Fifa-1.png" alt="Fifa-1" border="0"/></div>
                    <div><img src="https://i.ibb.co/Z2ZRPCT/Fifa.png" alt="Fifa" border="0"/></div>
                    <div><img src="https://i.ibb.co/4mhCY43/fortnite.png" alt="fortnite" border="0"/></div>
                </Carousel>
            </div>

            <div className="mainContent">
                <div className="options">
                    <div className="options__left">
                        {/*<div className="button1GA">
                            <button>GA+</button>
                        </div>*/}
                        <div className="button2Free">
                            <button>FREE</button>
                        </div>
                    </div>
                </div>
                <div className="option__center">
                            <NavLink exact to="/Tournaments" className="notSelectedFilter" activeClassName="selectedFilter">
                                Last Month
                            </NavLink>
                            <NavLink exact to="/Tournaments" className="notSelectedFilter"  activeClassName="selectedFilter">
                                Today
                            </NavLink>
                            <NavLink exact  to="/Tournaments" className="notSelectedFilter"  activeClassName="selectedFilter">
                                Next Month
                            </NavLink>
                </div>
                <hr />
                <div className="games">
                    <div className="flexRow"> {/*flex direction row*/} {/*Images statically stored at image bb.com for now*/}
                        
                        <Link to="/FreeFire">
                            <div id="game1"
                                onMouseEnter={()=> dispatch(game2Row1ReducerOn())} 
                                onMouseLeave={()=> dispatch(game2Row1ReducerOff())}> 
                                    
                                    {projectTwoIsHovered ? 
                                        <TournamentCardHover
                                        gameTitle="Free Fire Open" 
                                        startDate="18 Feb 2021"
                                        endDate="29 Feb 2021"   
                                        numberOfGamers="20+"
                                        prizeAmount="100,000"
                                        imageurl="https://i.ibb.co/QmHvf1X/free-Fire1.png"                    
                                        />  
                                        :  <TournamentItem imageurl="https://i.ibb.co/QmHvf1X/free-Fire1.png"/>                         
                                    }
                            </div>{/*--------------------Freefire-------------------*/}
                        </Link>

                        <div id="game2"
                            onMouseEnter={()=> dispatch(game1Row1ReducerOn())} //Disptaches/Fires off the positive reducer and enables the selector declared at top
                            onMouseLeave={()=> dispatch(game1Row1ReducerOff())}> 
                                
                                {projectOneIsHovered ? //turnery operator to see if game is hovered
                                    <TournamentCardHover
                                    gameTitle="Call of Duty" 
                                    startDate=" 3 Feb 2021"
                                    endDate="12 Feb 2021"   
                                    numberOfGamers="2"
                                    prizeAmount="300.00"
                                    imageurl="https://i.ibb.co/jDFpph5/cod1.png"                    
                                    />  
                                    :  <TournamentItem imageurl="https://i.ibb.co/jDFpph5/cod1.png"/>                         
                                }
                        </div>{/*-----------------COD1-----------------*/}

                        <div id="game3"
                            onMouseEnter={()=> dispatch(game3Row1ReducerOn())} 
                            onMouseLeave={()=> dispatch(game3Row1ReducerOff())}> 
                                
                                {projectThreeIsHovered ? 
                                    <TournamentCardHover
                                    gameTitle="GTA V " 
                                    startDate=" 7 Feb 2021"
                                    endDate="16 Feb 2021"   
                                    numberOfGamers="4"
                                    prizeAmount="79.00"
                                    imageurl="https://i.ibb.co/7X1TX1h/gta5.png"                    
                                    />  
                                    :  <TournamentItem imageurl="https://i.ibb.co/7X1TX1h/gta5.png"/>                         
                                }
                        </div>{/*-------------------GTA V------------------*/}

                        <div id="game4"
                            onMouseEnter={()=> dispatch(game4Row1ReducerOn())} 
                            onMouseLeave={()=> dispatch(game4Row1ReducerOff())}> 
                                
                                {projectFourIsHovered ? 
                                    <TournamentCardHover
                                    gameTitle="FIFA 20 " 
                                    startDate=" 10 Feb 2021"
                                    endDate="19 Feb 2021"   
                                    numberOfGamers="6"
                                    prizeAmount="189.00"
                                    imageurl="https://i.ibb.co/zHBJhhD/fifa20.png"                    
                                    />  
                                    :  <TournamentItem imageurl="https://i.ibb.co/zHBJhhD/fifa20.png"/>                         
                                }
                        </div>{/*---------------------fifa20---------------------------------*/}
                        
                    </div> {/*-----------------flexRow1 end-----------------------*/}

                    <div className="flexRow"> 
                            <div id="game1row2"
                                    onMouseEnter={()=> dispatch(game1Row2ReducerOn())} //Disptaches/Fires off the positive reducer and enables the selector declared at top
                                    onMouseLeave={()=> dispatch(game1Row2ReducerOff())}> 
                                        
                                        {projectFiveIsHovered ? //turnery operator to see if game is hovered
                                            <TournamentCardHover
                                            gameTitle="Fortnite Open" 
                                            startDate=" 6 Feb 2021"
                                            endDate="19 Feb 2021"   
                                            numberOfGamers="5"
                                            prizeAmount="380.00"
                                            imageurl="https://i.ibb.co/ykkLCNS/fortnite.png"                    
                                            />  
                                            :  <TournamentItem imageurl="https://i.ibb.co/ykkLCNS/fortnite.png"/>                         
                                        }
                                </div>{/*-----------------Fortnite-----------------*/}

                            <div id="game2row2"
                                    onMouseEnter={()=> dispatch(game2Row2ReducerOn())} 
                                    onMouseLeave={()=> dispatch(game2Row2ReducerOff())}> 
                                        
                                        {projectSixIsHovered ? 
                                            <TournamentCardHover
                                            gameTitle="Valorant" 
                                            startDate=" 7 Feb 2021"
                                            endDate="16 Feb 2021"   
                                            numberOfGamers="4"
                                            prizeAmount="79.00"
                                            imageurl="https://i.ibb.co/1ML2G5c/Valorant.png"                    
                                            />  
                                            :  <TournamentItem imageurl="https://i.ibb.co/1ML2G5c/Valorant.png"/>                         
                                }
                            </div>{/*-------------------Valorant------------------*/}

                            <div id="game3row2"
                                    onMouseEnter={()=> dispatch(game3Row2ReducerOn())} 
                                    onMouseLeave={()=> dispatch(game3Row2ReducerOff())}> 
                                        
                                        {projectSevenIsHovered ? 
                                            <TournamentCardHover
                                            gameTitle="NHL Playstation " 
                                            startDate=" 14 Feb 2021"
                                            endDate="23 Feb 2021"   
                                            numberOfGamers="4"
                                            prizeAmount="90.00"
                                            imageurl="https://i.ibb.co/rZwLSJd/nhlplaystation.png"                    
                                            />  
                                            :  <TournamentItem imageurl="https://i.ibb.co/rZwLSJd/nhlplaystation.png"/>                         
                                }
                            </div>{/*-------------------Valorant------------------*/}

                            <div id="game4"
                                    onMouseEnter={()=> dispatch(game4Row2ReducerOn())} 
                                    onMouseLeave={()=> dispatch(game4Row2ReducerOff())}> 
                                        
                                        {projectEightIsHovered ? 
                                            <TournamentCardHover
                                            gameTitle="Overwatch  " 
                                            startDate=" 10 Feb 2021"
                                            endDate="19 Feb 2021"   
                                            numberOfGamers="6"
                                            prizeAmount="189.00"
                                            imageurl="https://i.ibb.co/ggYyBGS/overwatch.png"                    
                                            />  
                                            :  <TournamentItem imageurl="https://i.ibb.co/ggYyBGS/overwatch.png"/>                         
                                        }
                            </div>{/*---------------------fifa20---------------------------------*/}

                    </div>
                    <div className="flexRow"> {/*Row 3*/}
                                <div id="game"
                                        onMouseEnter={()=> dispatch(game1Row3ReducerOn())} 
                                        onMouseLeave={()=> dispatch(game1Row3ReducerOff())}> 
                                            
                                            {projectNineIsHovered ? 
                                                <TournamentCardHover
                                                gameTitle="Apex Legends " 
                                                startDate=" 10 Feb 2021"
                                                endDate="19 Feb 2021"   
                                                numberOfGamers="6"
                                                prizeAmount="189.00"
                                                imageurl="https://i.ibb.co/gV0TsYB/apex.png"                    
                                                />  
                                                :  <TournamentItem imageurl="https://i.ibb.co/gV0TsYB/apex.png"/>                         
                                            }
                                </div>{/*---------------------Apex Legends---------------------------------*/}

                                <div id="game2"
                                        onMouseEnter={()=> dispatch(game2Row3ReducerOn())} 
                                        onMouseLeave={()=> dispatch(game2Row3ReducerOff())}> 
                                            
                                            {projectTenIsHovered ? 
                                                <TournamentCardHover
                                                gameTitle="Battle Field 5 " 
                                                startDate=" 15 Feb 2021"
                                                endDate="21 Feb 2021"   
                                                numberOfGamers="10"
                                                prizeAmount="289.00"
                                                imageurl="https://i.ibb.co/KDnNDBk/bf5.png"                    
                                                />  
                                                :  <TournamentItem imageurl="https://i.ibb.co/KDnNDBk/bf5.png"/>                         
                                            }
                                </div>{/*---------------------Battlefield 5---------------------------------*/}

                                <div id="game3"
                                        onMouseEnter={()=> dispatch(game3Row3ReducerOn())} 
                                        onMouseLeave={()=> dispatch(game3Row3ReducerOff())}> 
                                            
                                            {projectElevenIsHovered ? 
                                                <TournamentCardHover
                                                gameTitle="Call of Duty Black Ops " 
                                                startDate=" 18 Feb 2021"
                                                endDate="29 Feb 2021"   
                                                numberOfGamers="19"
                                                prizeAmount="789.00"
                                                imageurl="https://i.ibb.co/Xzm7wRH/cod3.png"                    
                                                />  
                                                :  <TournamentItem imageurl="https://i.ibb.co/Xzm7wRH/cod3.png"/>                         
                                            }
                                </div>{/*---------------------Battlefield 5---------------------------------*/}

                                <div id="game4"
                                        onMouseEnter={()=> dispatch(game4Row3ReducerOn())} 
                                        onMouseLeave={()=> dispatch(game4Row3ReducerOff())}> 
                                            
                                            {projectTwelveIsHovered ? 
                                                <TournamentCardHover
                                                gameTitle="Rainbow Six Seige " 
                                                startDate=" 18 Feb 2021"
                                                endDate="25 Feb 2021"   
                                                numberOfGamers="5"
                                                prizeAmount="139.00"
                                                imageurl="https://i.ibb.co/Y7V5ChN/rainbow.png"                    
                                                />  
                                                :  <TournamentItem imageurl="https://i.ibb.co/Y7V5ChN/rainbow.png"/>                         
                                            }
                                </div>{/*---------------------Battlefield 5---------------------------------*/}

                    </div>
                    <div className="flexRow"> {/*4th row*/}
                                <div id="game1row4"
                                        onMouseEnter={()=> dispatch(game1Row4ReducerOn())} 
                                        onMouseLeave={()=> dispatch(game1Row4ReducerOff())}> 
                                            
                                            {projectThirteenIsHovered ? 
                                                <TournamentCardHover
                                                gameTitle="NHL XBOX" 
                                                startDate=" 18 Feb 2021"
                                                endDate="25 Feb 2021"   
                                                numberOfGamers="6"
                                                prizeAmount="179.00"
                                                imageurl="https://i.ibb.co/rZwLSJd/nhlplaystation.png"                    
                                                />  
                                                :  <TournamentItem imageurl="https://i.ibb.co/rZwLSJd/nhlplaystation.png"/>                         
                                            }
                                </div>{/*---------------------Battlefield 5---------------------------------*/}

                                <div id="game2row4"
                                        onMouseEnter={()=> dispatch(game2Row4ReducerOn())} 
                                        onMouseLeave={()=> dispatch(game2Row4ReducerOff())}> 
                                            
                                            {projectFourteenIsHovered ? 
                                                <TournamentCardHover
                                                gameTitle="Rocket League " 
                                                startDate=" 20 Feb 2021"
                                                endDate="27 Feb 2021"   
                                                numberOfGamers="10"
                                                prizeAmount="289.00"
                                                imageurl="https://i.ibb.co/tMG79pN/rocket.png"                    
                                                />  
                                                :  <TournamentItem imageurl="https://i.ibb.co/tMG79pN/rocket.png"/>                         
                                            }
                                </div>{/*---------------------Battlefield 5---------------------------------*/}

                                <div id="game3row4"
                                    onMouseEnter={()=> dispatch(game3Row4ReducerOn())} 
                                    onMouseLeave={()=> dispatch(game3Row4ReducerOff())}> 
                                        
                                        {projectFifteenIsHovered ? 
                                            <TournamentCardHover
                                            gameTitle="Overwatch  " 
                                            startDate=" 10 Feb 2021"
                                            endDate="19 Feb 2021"   
                                            numberOfGamers="6"
                                            prizeAmount="299.00"
                                            imageurl="https://i.ibb.co/ggYyBGS/overwatch.png"                    
                                            />  
                                            :  <TournamentItem imageurl="https://i.ibb.co/ggYyBGS/overwatch.png"/>                         
                                        }
                            </div>{/*---------------------fifa20---------------------------------*/}

                            <div id="game3row4"
                                    onMouseEnter={()=> dispatch(game4Row4ReducerOn())} 
                                    onMouseLeave={()=> dispatch(game4Row4ReducerOff())}> 
                                        
                                        {projectSixteenIsHovered ? 
                                            <TournamentCardHover
                                            gameTitle="COD Cold War  " 
                                            startDate=" 10 Feb 2021"
                                            endDate="19 Feb 2021"   
                                            numberOfGamers="6"
                                            prizeAmount="189.00"
                                            imageurl="https://i.ibb.co/RTfZjDN/codcoldwar.png"                    
                                            />  
                                            :  <TournamentItem imageurl="https://i.ibb.co/RTfZjDN/codcoldwar.png"/>                         
                                        }
                            </div>{/*---------------------cold war---------------------------------*/}

                    </div>
                   
                   {/*<div className="loadmoreButton">
                            <button>Load More</button>
                                    </div>*/}

                </div>
            </div>
            <div className="footer">
                <Footer/>

            </div>
        </div>
    )
}

export default Tournaments
