import React from 'react'
import './Eventpage.sass'
import FutureEvents from '../../../Subcomponents/CardGrid/futureEvents';
// import Flip from 'react-reveal/Flip';
// import Fade from 'react-reveal/Fade';
// import Searchbar from '../../../Subcomponents/SearchBar/Searchbar';


function Eventpage() {
  return (
    <>
      <div className="E-container">
        {/* <Flip top> */}
        
        <div className="E-1 green">
          <h1>Events</h1>
        </div>
        <div className="E-2">
          {/* <Searchbar  /> */}
        </div>
        {/* </Flip>
        <Fade> */}
        <div className="E-3">
          <FutureEvents />
        </div>
        {/* </Fade> */}
      </div>
    </>
  )
}

export default Eventpage