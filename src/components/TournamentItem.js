import React from 'react'
import '../styles/components/TournamentItem.css'
function TournamentItem({imageurl}) {
    return (
        <div className="tournamentItem">
            <div className="ImageContainer"> {/*Takes props of image url hosted online*/}
                    <img src={imageurl} alt="Tournament Card" border="0" /> {/*images hosted on Image bb.com , right now this code is more on static side*/}
            </div>
        </div>
    )
}

export default TournamentItem
