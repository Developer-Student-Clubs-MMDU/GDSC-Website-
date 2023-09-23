import React from 'react';
import './thankYou.css'
import { useNavigate } from "react-router-dom";


const ThankYouPage = () => {
  const navigate = useNavigate();
  return (
    <div className="thank-you-page">
      <h1>Submission is Closed!</h1>
      {/* <p>Join Our <a target="_blank" href="https://chat.whatsapp.com/GVAjVv2fcWcCD06hJf6dZh">Whatsapp group</a> for updates</p> */}
      {/* navigate("/ThankYou"); */}
      
    </div>
  );
}

export default ThankYouPage;
