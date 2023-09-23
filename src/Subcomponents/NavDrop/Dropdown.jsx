import React from 'react'
import './Dropdown.sass'
import { Link } from 'react-router-dom'

function Dropdown() {
  return (
    <ol className="G-H-N-DROP-Container">
        <li><Link to="/Events" >Upcoming</Link></li>
        <li><Link to="/PastEvents"  >Past</Link></li>
    </ol>
  )
}

export default Dropdown