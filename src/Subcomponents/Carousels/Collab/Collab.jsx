import React from 'react'
import Carousel from './Carousel'
import "./Collab.sass";
import "./Carousel.sass";



function Collab() {
  return (
    <div className="H-Sc-Container" >
      <h1>Community Allies</h1>
      {/* <p>GDSC has been honored to partner up with these Organisations</p> */}
      <Carousel />
      {/* <style jsx>{`
            
          
          `}</style> */}
    </div>
  )
}

export default Collab