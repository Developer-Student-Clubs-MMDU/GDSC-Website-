import React, { useEffect } from 'react'
import './Loader.css'

function ScreenLoader() {
    useEffect(() => {
        window.onload=()=>{
            const preloader = document.querySelector(".loadercontain");
            preloader.remove();
            console.log("site loaded")
          }
      });
    return (
        <div  className="loadercontain">
            <div className="loader">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
                <div className="dot dot4"></div>
                <div className="dot dot5"></div>
                <div className="dot dot6"></div>
                <div className="dot dot7"></div>
            </div>
        </div>
    )
}

export default ScreenLoader