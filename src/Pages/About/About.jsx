import React from "react";
import "./About.sass";
import Image from "../../Assets/images/image.jpg";
import pic from "../../Assets/vishal sir.png"
import Team from "../../Subcomponents/Carousels/MeetTeam/Team";
// import Flip from 'react-reveal/Flip';

function About() {
  //      const location = useLocation()

  //     location = {
  //         pathname:"/about",
  //         hash: "#A-4-1"
  //     }

  //     useEffect(()=> {

  //             let elem = document.getElementById("A-4-1")
  //             if (elem) {
  //                 elem.scrollIntoView()

  //             }
  // },[])

  return (
    <div className="A-Container">
        {/* <Flip top> */}
      <div className="A-1">
        <h1>About Us </h1>
      </div>
      <div className="A-2">
        <div className="A-2-1">
          <p>
            GDSC MM(DU) is a community of students who are passionate about
            technology and innovation. The club is a part of the Google
            Developer Student Clubs program, which is a global initiative by
            Google to provide students with the opportunity to learn and develop
            their technical skills.
          </p>
          <p>
            GDSC MM(DU) aims to provide a platform for students to learn, share,
            and collaborate on various projects and activities related to
            technology. The club hosts various events such as hackathons, coding
            competitions, tech talks, and workshops, which help students to
            explore new technologies and gain practical experience.
          </p>
        </div>
        <div className="A-2-2">
          <img src={Image}  alt="" />
        </div>
      </div>
      <div className="A-4">
        <div className="A-4-0">
          <img src={pic} id="sir" alt="" />
          <h3>Mr. Vishal Gupta</h3>
          <p>Faculty Advisor</p>
        </div>
        <div className="A-4-1" id="A-4-1">
          <h1>Meet The Team</h1>
        </div>
        <Team />
      </div>
      {/* </Flip> */}
    </div>
  );
}

export default About;
