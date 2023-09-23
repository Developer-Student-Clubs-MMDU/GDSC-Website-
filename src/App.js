import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Router from './Pages/Router';
import InterviewModal from './Components/Announcement/AnnouncementModal';
import AnnouncementModal from './Components/Announcement/AnnouncementModal';
import AnnouncementPopupButton from './Components/Announcement/AnnouncementModal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <BrowserRouter>
      {/* <Fade duration={3000}> */}
        <div className="App">
          <Header />
          <Router />
          <Footer />
          <InterviewModal isOpen={modalIsOpen} onClose={closeModal} />
        </div>
        {/* </Fade> */}
      </BrowserRouter>
    </>
  );
}

export default App;
