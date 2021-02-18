import React from 'react'
import NavBar from '../components/NavBar';
import '../styles/components/Tournaments.css' //CSS file of this component
import Carousel from 'react-multi-carousel'; //top carousel 
import 'react-multi-carousel/lib/styles.css';
import { Link, NavLink } from 'react-router-dom';
import TournamentItem from '../components/TournamentItem';
import TournamentCardHover from '../components/TournamentCardHover'; //component that gets rendered on hovering on tournament card compnent 
import { game1Row1Selector, game2Row1Selector } from '../features/hoverSlice' //importing redux selectors
import { game2Row1ReducerOn, game2Row1ReducerOff }
    from '../features/hoverSlice' //importing reducers from redux
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import Footer from '../components/Footer';

import * as Actions from "./store/actions/actions";
import * as moment from "moment";


function Tournaments() {
    const dispatch = useDispatch();
    const [tournaments, setTournaments] = React.useState(null);
    const [games, setGames] = React.useState(null);

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
    const [inprogress, setInprogress] = React.useState(false);

    //for irony
    let organizationId = 38;

    React.useEffect(() => {
        setInprogress(true)
        dispatch(Actions.getTournmentList(1, 100, 'Organization', organizationId)).then((response) => {
            setInprogress(false)
            if (response.success) {
                setTournaments(response.data.tournaments.data)
                setGames(response.data.game)
                console.log(response.data.tournaments.data)
            }
            else {
                //display error message 
            }
        });
    }, [dispatch]);

    //Redux selectors 
    const projectTwoIsHovered = useSelector(game2Row1Selector);


    return (
        <div className="tournaments">
            <div className="banner">
                <h2>Tournaments</h2>
            </div>
            <div className="carouselContainer">
                {games && games.length > 0 &&
                    <Carousel className="carousel" responsive={responsive}>
                        {games.map((game, index) =>
                            <div key={index}><img src={game.titleImage} alt="fortnite" border="0" /></div>
                        )}
                    </Carousel>
                }
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
                    <NavLink exact to="/Tournaments" className="notSelectedFilter" activeClassName="selectedFilter">
                        Today
                            </NavLink>
                    <NavLink exact to="/Tournaments" className="notSelectedFilter" activeClassName="selectedFilter">
                        Next Month
                            </NavLink>
                </div>
                <hr />
                <div className="games">
                    <div className="flexRow"> {/*flex direction row*/} {/*Images statically stored at image bb.com for now*/}
                        {tournaments && tournaments.map((tournament, index) =>
                            <Link key={index} to={`/tournaments/${tournament.hash_id}`}>
                                <div id="game1"
                                    onMouseEnter={() => dispatch(game2Row1ReducerOn())}
                                    onMouseLeave={() => dispatch(game2Row1ReducerOff())}>

                                    {projectTwoIsHovered ?
                                        <TournamentCardHover
                                            gameTitle={tournament.name}
                                            startDate={moment.utc(tournament.date, "YYYY-MM-DD HH:mm:ss").local().format(" D MMM 'YY h:mm A")}
                                            endDate={moment.utc(tournament.endDate, "YYYY-MM-DD HH:mm:ss").local().format(" D MMM 'YY h:mm A")}
                                            numberOfGamers={tournament.entries_count}
                                            prizeAmount={tournament.pricePool}
                                            imageurl="https://i.ibb.co/QmHvf1X/free-Fire1.png"
                                        />
                                        : <TournamentItem imageurl="https://i.ibb.co/QmHvf1X/free-Fire1.png" />
                                    }
                                </div>{/*--------------------Freefire-------------------*/}
                            </Link>
                        )}
                    </div>

                    {/*<div className="loadmoreButton">
                            <button>Load More</button>
                                    </div>*/}

                </div>
            </div>
            <div className="footer">
                <Footer />

            </div>
        </div>
    )
}

export default Tournaments
