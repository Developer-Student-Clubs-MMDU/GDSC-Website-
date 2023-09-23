import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PastEventpage from './Events/Eventpage/PastEventpage'
import Eventpage from './Events/Eventpage/UpcomingEventpage'
import About from './About/About';
import Home from './Home/Home';
import EventDetails from './Events/eventDetails';
import './Router.css'
import AboutTeam from './AboutTeam/AboutTeam';
import Magazine from './Magazine/Magazine';
import StudentInterviewForm from './ContactForm/ContactForm'
import thankYou from './Thank/thanks';
import ThankYouPage from './Thank/thanks';
// import thankYou from './ContactForm/thankYou';
// import thankYou from './ContactForm/thankYou';


function Router() {
    return (
        <div className='parent'>
            <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path="/eventdetails/:id" element={<EventDetails/>} />
            <Route path="/PastEvents" element={<PastEventpage/>} />
            <Route path="/Events" element={<Eventpage/>} />
            <Route path="/AboutTeam" element={<AboutTeam/>} />
            <Route path="/magazine" element={<Magazine/>} />
            {/* <Route path="/thankyou" element={<thankYou/>} /> */}
            <Route path="/ContactForm" element={<StudentInterviewForm/>} />
            <Route path="/thankYou" element={<ThankYouPage/>}/>
        </Routes>
        </div>
    )
}

export default Router