import React from 'react'
import { GrSearch } from 'react-icons/gr';

function Searchbar() {

    

    return (
        <div className="E-2-2">
            <li><input type="text" name="Search" id="input" placeholder='Search Event' /></li>
            <li> <GrSearch /> </li>
        </div>
    )
}

export default Searchbar