import React from 'react'
import './AboutTeam.sass'
import Image from '../../Assets/images/image.jpg'
import Team from '../../Subcomponents/Carousels/MeetTeam/Team'
// import Flip from 'react-reveal/Flip';


function AboutTeam() {
    return (
        <div className="AT-Container">
            {/* <Flip top> */}
            <div className="AT-1" >
                <h1>Team</h1>
            </div>
            <div className="AT-4">
                <div className="AT-4-1" id='AT-4-1'>
                {/* <h1>Meet The Team</h1> */}
                </div>
                
              <Team/>
        </div>
        {/* </Flip> */}
        </div>
    )
}

export default AboutTeam