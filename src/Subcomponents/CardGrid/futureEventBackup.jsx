import React from 'react'
import './Card.sass'
import Image from '../../Assets/images/image.jpg'
import { Link } from 'react-router-dom'
function FutureEvents() {
 
  const initialState = [
    {
        id:12,
        title: 'Compose Camp',
        CompleteTitle : 'Compose Camp',
        details:{
            date: '01-03-2023',
            time:{
                start: '1:40 pm',
                finish :'4:00 pm'
            },
            venue: 'Lab 176, MMEC, MM(DU)'
        },
        status: 'upcoming',
        type: 'Info Session ',
        img: 'https://blog.desdelinux.net/wp-content/uploads/2021/08/Jetpack-Compose-1024x305.png',
        description:'Compose Camps are community-organized events focused on how to build Android apps using Jetpack Compose. During these sessions, attendees can get hands-on coding experience on how to develop apps using the latest toolset, Compose, the modern way to develop UI on Android. For those of you who’ve attended Android Study Jams in the past, this is a fun spin on the event series with a focus on Compose!',
        Speaker:{
            name:'Ms. Jenny Oliens',
            type: 'Android developer',
            image: 'https://blog.desdelinux.net/wp-content/uploads/2021/08/Jetpack-Compose-1024x305.png'
        },
        EventImages: ["a","a","a","a",]
    },
    {
        id:13,
        title: 'Appeofesta',
        details:{
            date: '01-04-2023',
            time:{
                start: '1:40 pm',
                finish :'4:00 pm'
            },
            venue: 'Seminar Hall Block-2 mmec'
        },
        status: 'upcoming',
        type: 'Hackathon',
        img: 'https://th.bing.com/th/id/OIP.DX2t5tVds1PRUeKQotQYnAHaFY?pid=ImgDet&rs=1',
        description:'',
    },
    {
        id:14,
        title: 'Machine Learning',
        details:{
            date: '25-03-2023',
            time:{
                start: '1:40 pm',
                finish :'4:00 pm'
            },
            venue: 'Lab 176, MMEC, MM(DU)'
        },
        status: 'upcoming',
        type: 'workshop',
        img :'https://th.bing.com/th/id/OIP.caPXNH5ZFv06sl-66KFdVQHaE7?pid=ImgDet&rs=1',
        description:'',
    },
    {
        id:15,
        title: 'Flutter Festival',
        details:{
            date: '15-03-2023',
            time:{
                start: '1:40 pm',
                finish :'4:00 pm'
            },
            venue: 'Lab 176, MMEC, MM(DU)'
        },
        status: 'upcoming',
        type: 'workshop',
        img :'https://miro.medium.com/max/1200/1*qUwhyiEX0ubr7ezTj85ZGQ.jpeg',
        description:'',
    },
]
console.log(initialState[0])

  return (
      <div className="E-SC-container">
         {
          initialState.map((item)=>{
           return(
            <div className="E-SC-1">
            <div className="E-SC-1-1">
            <img src={item.img} alt="" />
            </div>
            <div className="E-SC-1-2">
             
                <table>
                  <tr>
                    <td colSpan="2" id="head" >{item.title}</td>
                  </tr>
                  <tr  >
                    <td colSpan="2" id="subhead">Details</td>
                  </tr>
                  <tr>
                    <td>Date :</td>
                    <td>{item.details.date}</td>
                  </tr>
                  <tr>
                    <td>Time :</td>
                    <td> {item.details.time.start} to {item.details.time.finish} </td>
                  </tr>
                  <tr>
                    <td>Venue : </td>
                    <td>{item.details.venue}</td>
                  </tr>
                </table>
                <button>
                  <Link to=''> Register</Link>
                </button>
            </div>
          </div>
           )
          })
         }
      </div>
  )
}

export default FutureEvents

