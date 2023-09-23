// import React from 'react'
// import './eventDetails.sass';
// import { BsChevronRight } from 'react-icons/bs';
// import Moments from '../../Subcomponents/Carousels/eventImg/Moments';
// import {db} from '../../Firebase'
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect,useState } from 'react'
// import { useParams } from 'react-router-dom';

// function EventDetails() {
//   const {id} = useParams();
//   let arr, item;

  

//     // const [data, setdata] = useState(false);
//     // const Fetch = async()=>{
//     //   await getDocs(collection(db, "users"))
//     //   .then((querySnapshot)=>{               
//     //       const newData = querySnapshot.docs
//     //           .map((doc) => ({...doc.data(), id:doc.id }));             
//     //       console.log(newData);
//     //       setTimeout(() => {
//     //         const arr =  newData.filter(obj => obj.id == id); 
//     //         console.log(arr)
//     //         item = arr[0];
//     //         console.log(item)
//     //         setdata(true)
//     //       }, 2)
//     //   })}
   
//        arr = JSON.parse(localStorage.getItem('data'))
//        setTimeout(()=>{
//         const array =  arr.filter(obj => obj.id == id);
//         item = array[0]
//         console.log(item)
//        },1000)
       
       
       
//       // Fetch();

//   // const Speaker ={
//   //   name:'James Olive',
//   //   detail : 'Android developer',
//   //   img :'https://i.pinimg.com/originals/bc/67/74/bc6774134132b43d5ec6ed7bdc748a6c.jpg'
//   // }
//   return (
//     <div className='ED-CONTAINER'>
//       <div className="ED-1"><h1>Event Details</h1></div>
//       <div className="ED-2"><p>Past Events</p> <BsChevronRight /> <p>{item.title}</p> </div>
//       <div className="ED-3">
//         <h1>{item.type} | {item.completeTitle }</h1>
//         <p>{item.description }</p>
//       </div>
//       <h2>Speaker</h2>
//       <div className="ED-4">
//         <div className="ED-4-1">
//           <div className="ED-4-1-1">
//             <img src={item.speakerImg } alt="" />
//             <h3>{item.speakerName}</h3>
//             <p>{item.speakerType}</p>
//           </div>
//         </div>
//       </div>
//       <div className="ED-5">
//         <h2>Moments</h2>
//         <Moments image={item.EventImages}/>
//       </div>
//     </div>
//   )
// }

// export default EventDetails