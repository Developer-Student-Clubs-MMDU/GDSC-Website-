import React from 'react'
import "./Stats.sass";


function Stats({data,component}) {
{
    if(component == "intro"){
        return (
            <div className=" intro H-Sc-C " id="H-Sc">
                <h3>HELLO THERE </h3>
                <h1>WE ARE GDSC MM(DU)</h1>
                {/* <h1>Community Insights</h1> */}
                <p>We are a community of student developers passionate about technologies. <br></br>We organizes workshops, coding competitions, and seminars to foster learning and collaboration among developers. </p>
                <table>
                    <tr>
                        <td>
                            <li>Seminars</li>
                            <li>{data.seminars}</li>
                        </td>
                        <td>
                            
                            <li>Hackathons</li>
                            <li>{data.Hackathons}</li>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            
                            <li>Workshops</li>
                            <li>{data.workshops}</li>
                        </td>
                        <td>
                            
                            <li>Open Source</li>
                            <li>{data.open}</li>
                        </td>
                    </tr>
                </table>
                </div>
            )
    }else{
        return (
            <div className="H-Sc-C insight" id="H-Sc-C">
                {/* <h3>HELLO THERE </h3>
                <h1>WE ARE GDSC(MM(DU))</h1> */}
                <h1>Community Insights</h1>
                {/* <p>We are a community of student developers passionate about technologies. </p> */}
                <table>
                    <tr>
                        <td>
                            <li>{data.events}</li>
                            <li>Events</li>
                        </td>
                        <td>
                            <li>{data.collab}</li>
                            <li>Collaborations</li>
                        </td>
                        <td>
                            <li>{data.footfall}</li>
                            <li>Footfalls</li>
                        </td>
                        <td>
                            <li>{data.prizes}</li>
                            <li>Prizes Earned</li>
                        </td>
                    </tr>
                </table>
                </div>
          )
    }
  }
}

export default Stats