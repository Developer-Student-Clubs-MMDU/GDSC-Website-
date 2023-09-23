import React from 'react'
import './Home.sass';
import Media from '../../Subcomponents/SocialMedia/mediaContainer/Media';
import Collab from '../../Subcomponents/Carousels/Collab/Collab';
import { Link } from 'react-router-dom'
import Stats from '../../Subcomponents/StatsBar/Stats';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaDiscord} from 'react-icons/fa'
import { AiFillYoutube} from 'react-icons/ai'
import { AiFillLinkedin} from 'react-icons/ai'
import { AiFillGithub} from 'react-icons/ai'
import CountUp from 'react-countup';
import AnnouncementPopupButton from '../../Components/Announcement/AnnouncementModal';



export default function Home() {


  var a = {
    events: <CountUp end={120} />,
    collab:<CountUp end={34} />,
    footfall:<CountUp end={2300} />,
    prizes: <CountUp end={24} />
}
var b = {
  workshops : "Our interactive workshops equip  university students with practical skills and knowledge in various technical domains, empowering them to thrive in the ever-evolving world of technology.",
  seminars : "Our insightful seminars, organized under Google Developer Student Clubs, invite industry experts to share their expertise, empowering students to stay updated with the latest tech trends and advancements.", 
  Hackathons :"Our exhilarating hackathons provide a platform for university-level students to showcase their skills, collaborate, and build remarkable prototypes within a limited timeframe.",
  open:" We collaborate with developers worldwide, enhancing software and creating innovative solutions for the tech community.",
}

  const scroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 2250, left: 0, behavior: "smooth" })
    }, 80)
  }

  return (
    < div className='main'>
                <AnnouncementPopupButton/>

      <div className="H-Container"  >
      {/* <Flip top cascade> */}
        <li>
          <p> Google Developer Student Clubs ,  Maharishi Markandeshwar (Deemed to be University)</p>
        </li>
        {/* </Flip> */}
        {/* <Flip top cascade> */}

        <li>
          <p>Empowering Tech Skills, Unleashing Innovation, Learning and Collaboration!</p>
        </li>
        <li>
          <Link to={"/#H-Sc-C"} onClick={scroll} >
            <button>About Us</button>
          </Link>
        </li>
        <li className='social'>
          <td>
            <Link to="https://www.instagram.com/gdsc_mmdu/" ><AiFillInstagram/></Link>
          </td>
          <td>
            <Link to="https://twitter.com/gdsc_mmdu" >< AiFillTwitterCircle/></Link>
          </td>
          <td>
            <Link to="https://discord.com/invite/Gkb4j9rUPD" ><FaDiscord/></Link>
          </td>
          <td>
            <Link to="https://www.youtube.com/channel/UCI-VV1WUuLG-1ptkoqKYf0g" ><AiFillYoutube/></Link>
          </td>
          <td>
            <Link to="https://www.linkedin.com/company/dscmmdu/" ><AiFillLinkedin/></Link>
          </td>
          <td>
            <Link to="https://github.com/Developer-Student-Clubs-MMDU" ><AiFillGithub/></Link>
          </td>
        </li>
        {/* </Flip> */}
      </div>
      {/* <Fade duration={2500}> */}
      <Stats data={b} component="intro"/>
      <Stats data={a} component9="insight"/>
      <Media />
      <Collab />
      {/* </Fade> */}
    </div>
  )
}
