import React from 'react'
import './Eventpage.sass'
import { GrSearch } from 'react-icons/gr';
import PastEvents from '../../../Subcomponents/CardGrid/PastEvents';


function PastEventpage() {
  return (
    <>
      <div className="E-container">
        <div className="E-1 yellow">
          <h1>Past Events</h1>
        </div>
        <div className="E-2">
          <div className="E-2-2">
            <li><input type="text" name="Search" id="input"  placeholder='Search Event' /></li>
            <li> <GrSearch /> </li>
          </div>
        </div>
        <div className="E-3">
          <PastEvents />
        </div>
      </div>
    </>
  )
}

export default PastEventpage