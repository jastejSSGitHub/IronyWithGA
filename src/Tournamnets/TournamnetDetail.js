import React from 'react'
import { Router, Route } from 'react-router'
import Footer from '../components/Footer';
import '../styles/components/FreeFire.css'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import * as Actions from "./store/actions/actions";
import * as moment from "moment";
import { useParams } from "react-router-dom";

function FreeFire() {
    const history = useHistory();
    const dispatch = useDispatch();
    let { tournamentId } = useParams();

    const [tournament, setTournamentDetail] = React.useState(null);

    React.useEffect(() => {
        dispatch(Actions.getTournmentDetail(tournamentId)).then((response) => {
            if (response.success) {
                setTournamentDetail(response.data)
            }
            else {
                //display error message 
            }
        });
    }, []);

    if (!tournament) {
        //if data notavailable or in progress
        return (<></>)
    }
    return (
        <div className="freeFire">
            <div className="bannerDeatilsPage">
                <div className="topBanner">
                    <div className="topBannerButton"
                        onClick={() => history.push("/Tournaments", { from: "HomePage" })}>
                        <img src="https://i.ibb.co/drC9wJv/back-Button.png" alt="back-Button" border="0" />
                    </div>
                    <div className="bannerHeading">
                        <h1>{tournament.contest.name}</h1>
                    </div>
                </div>

                <div data-aos='fade-right' className="GameBannerImage">
                    <img src="https://i.ibb.co/yn0XXh1/banner-Image-2.png" alt="banner-Image-2" border="0" />
                    {/* display platform */}
                    {/* {tournament.contest.platforms.map((platform, index) => (
                    <span key={index}>{platform.name}</span>
                  ))} */}
                </div>
            </div>
            <div className="content">
                <div className="content__top">
                    <div className="content__topRow">
                        <div className="row__left">
                            <div className="tag">
                                <h2>{tournament.contest.customStatus}</h2>
                            </div>
                        </div>
                        <div className="row__right">
                            <h3>Start</h3>
                            <h2>{moment.utc(tournament.contest.date, "YYYY-MM-DD HH:mm:ss").local().format("MMM DD")}</h2>
                            <h3>{moment.utc(tournament.contest.date, "YYYY-MM-DD HH:mm:ss").local().format("h:mm A")}</h3>
                        </div>
                    </div>
                    <div className="content__BottomRow">
                        <div className="row__left">
                            <div className="tag">
                                <h2>{tournament.contest.stream_type}</h2>
                            </div>
                        </div>
                        <div className="row__right">
                            <h3>End</h3>
                            <h2>{moment.utc(tournament.contest.endDate, "YYYY-MM-DD HH:mm:ss").local().format("MMM DD")}</h2>
                            <h3>{moment.utc(tournament.contest.endDate, "YYYY-MM-DD HH:mm:ss").local().format("h:mm A")}</h3>
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
                                    <h3>{tournament.contest.entry_fee}</h3>
                                </div>
                                <div className="box__sectionContentMini">
                                    <h2>Re-entry</h2>
                                    <h3>{tournament.contest.reentry_fee}</h3>
                                </div>
                            </div>
                        </div> {/*Section 1 within the box*/}
                        <div className="horizontalline">
                            <hr />
                        </div>


                        <div className="box__section">
                            <div className="box__heading">
                                <h1>Prize Pool</h1>
                            </div>
                            <div className="box__sectionContent">
                                <div className="box__sectionContentMini">
                                    <h2 id="prize">INR {tournament.contest.prizePool.total}</h2>
                                </div>

                            </div>
                        </div> {/*Section 2 within the box*/}
                        <div className="horizontalline">
                            <hr />
                        </div>

                        <div id="sectionEnd" className="box__section">
                            <div className="box__heading">
                                <h1>Entry Fee</h1>
                            </div>
                            <div className="box__sectionContent">
                                <div className="box__sectionContentMini">
                                    <h2>Format</h2>
                                    <h3>{tournament.contest.format}</h3>
                                </div>
                                <div className="box__sectionContentMini">
                                    <h2>Type</h2>
                                    <h3>{tournament.contest.type}</h3>
                                </div>
                                <div className="box__sectionContentMini">
                                    <h2>How to Win</h2>
                                    <h3>{tournament.contest.resultType.name}</h3>
                                </div>
                            </div>
                        </div> {/*Section 1 within the box*/}

                    </div>
                    <div className="box">
                        <div className="box__heading">
                            <h1>Rules</h1>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: tournament.rules[0] }} />
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>

    )
}

export default FreeFire
