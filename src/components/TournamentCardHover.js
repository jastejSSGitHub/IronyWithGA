import React from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import '../styles/components/TournamentCardHover.css'
 
function TournamentCardHover({gameTitle, startDate, endDate, numberOfGamers, prizeAmount, imageurl}) {
    return (
        <div className="tournamentCardHover">

            <div className="backgroundImage">
                <img src={imageurl} alt=""/>

            <div className="InfoBox">
                <div className="InfoBox__top">
                    <h1>{gameTitle}</h1>
                    <h2>Starts:  {startDate} | 12:00 pm IST</h2>
                    <h2>Ends:  {endDate} | 12:00 pm IST</h2>
                </div>
                    <div className="InfoBox__bottom">
                        <div className="InfoBox__bottom__left">
                            <PeopleAltIcon/>
                            <h2>{numberOfGamers}</h2>
                        </div>
                        <div className="InfoBox__bottom__right">
                            <h4>Reward: INR</h4>
                            <h3>{prizeAmount}</h3>
                        </div>
                    </div>
            </div>
            </div>

        </div>
    )
}

export default TournamentCardHover
