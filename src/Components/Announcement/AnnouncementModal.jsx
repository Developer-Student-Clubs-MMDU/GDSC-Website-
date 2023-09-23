import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './modal.scss';
import { GrAnnounce} from 'react-icons/gr'


const AnnouncementPopupButton = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const handleNavigation = () => {
    navigate('/ContactForm');
    setPopupVisible(false);
  };

  return (
    <div className="popup-container">

      <button className="popup-button" onClick={togglePopup}>
      <GrAnnounce style={{ fontSize: '24px' }} />      </button><span className='annouce'>Announcement</span>
      {popupVisible && (
        <div className="popup-content">
          <p>🎉🌟Follow us on Socials and Don't miss out any updates! 🚀👩‍💻 </p>
          {/* <button className='apply-button' onClick={handleNavigation}>Apply Now</button> */}
        </div>

      )}

    </div>
  );
};

export default AnnouncementPopupButton;
