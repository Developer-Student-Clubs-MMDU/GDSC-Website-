import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { ImLinkedin } from 'react-icons/im'
import { FaDiscord } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaYoutube} from 'react-icons/fa'
import './footer.sass'
import Image from '../../Assets/images/Flogo.png'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className="G-F">
      <div className="G-F-1">
        <img src={Image} alt="gdsc logo" />
      </div>
      <div className="G-F-2">GDSC MM(DU) is a student-led community supported by Google that fosters learning, collaboration, and innovation in technical areas among university students.</div>
      <div className="G-F-3" id="G-F-3">
        <p>Reach out to us :</p>
        <ol>
          <li><span class="material-symbols-outlined">
            mail
          </span><p> mmdu.dsc@gmail.com </p></li>
          {/* <li>
            <span class="material-symbols-outlined">
              call
            </span>
            <p>7318388965</p>
          </li> */}
          <li>
            <span class="material-symbols-outlined">
              location_on
            </span>
            <p>MM Education Complex,MM(DU),Mullana (Ambala),Mullana, Haryana, India, 133207</p>
          </li>
        </ol>
      </div>
      <div className="G-F-4">
          <p>Follow us on :</p>
          <ol>
            <li> <Link to="https://twitter.com/gdsc_mmdu" ><BsTwitter/></Link>  </li>
            <li> <Link to="https://www.instagram.com/gdsc_mmdu/" ><AiFillInstagram /></Link>  </li>
            <li> <Link to="https://www.linkedin.com/company/dscmmdu/" ><ImLinkedin/></Link>  </li>
            <li> <Link to="https://discord.com/invite/Gkb4j9rUPD" ><FaDiscord /></Link>  </li>
             <li>
              <Link to="https://github.com/Developer-Student-Clubs-MMDU" ><FaGithub/></Link>
             </li>
             <li>
              <Link to="https://www.youtube.com/channel/UCI-VV1WUuLG-1ptkoqKYf0g"><FaYoutube/></Link>
             </li>
          </ol>
      </div>
      {/* <div className="G-F-5">
        <p>Quick Links</p>
        <ul>
          <li>
            <Link >Events</Link>
          </li>
          <li>
            <Link>Certificates</Link>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default Footer