import React from 'react'
import image from '../../Assets/images/header_logo.png'
import picture from '../../Assets/images/gdsc_logo.png'

function Logo({width}) {
  {
    if(width.innerWidth>960){
        return(
            <>
            <img src={image} alt=""  />
            <style jsx>{`
              img{
                width: 300px;
              }
            `}</style>
            </>
            )
    }else{
        return(
            <>
            <img src={picture} alt=""  />
            <style jsx>{`
              img{
                width: 60px;
              }
            `}</style>
            </>
        )
    }
  }
}

export default Logo