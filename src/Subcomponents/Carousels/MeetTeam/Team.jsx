import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import './Team.sass';
import { db, storage } from '../../../Firebase'
import { useRef } from 'react';
import { query, orderBy } from 'firebase/firestore';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';








import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";


function Team() {


  const [slide, setSlide] = useState([{}]);
  const sliderRef = useRef(null);






  const Fetch = async () => {
    await getDocs(query(collection(db, "gdscTeam"), orderBy("rank", "asc")))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setSlide(newData);
        console.log(slide);
      })
  }

  useEffect(() => {
    Fetch();
  }, []);





  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    // nextArrow: <IoIosArrowForward />,
    // prevArrow: <IoIosArrowBack />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };




  const [events, setEvents] = useState([]);
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({

    position: null,
    name: "",
    Session: null,
  });
  const [updatedImage, setUpdatedImage] = useState(null);
  const [eventIdToUpdate, setEventIdToUpdate] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const eventCollection = collection(db, "Team"); // Specify the correct path to your "Team" collection
      const q = query(eventCollection, orderBy("Rank", "asc")); // Create a query with the orderBy clause
      const querySnapshot = await getDocs(q);

      const teamData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEvents(teamData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (eventId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (shouldDelete) {
      const eventDocRef = doc(db, "Events", eventId);
      await deleteDoc(eventDocRef);
      fetchData();
    }
  };

  const handleEdit = (event) => {
    setEventIdToUpdate(event.id);
    setFormData({

      position: event.position,
      name: event.name,
      Session: event.Session,
    });
  };

  const handleCancelEdit = () => {
    setEventIdToUpdate(null);
    setFormData({

      position: null,
      name: "",
      Session: null,
    });
    setUpdatedImage(null);
  };

  const handleUpdate = async () => {
    if (eventIdToUpdate) {
      const eventDocRef = doc(db, "Team", eventIdToUpdate);
      await updateDoc(eventDocRef, {

        position: formData.position,
        name: formData.name,
        Session: formData.Session,
      });

      if (updatedImage) {
        const storageRef = ref(storage, `/files/${updatedImage.name}`);
        const uploadTask = uploadBytesResumable(storageRef, updatedImage);

        try {
          await uploadTask;
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log(downloadURL);

          await updateDoc(eventDocRef, {
            imageUrl: downloadURL,
          });
        } catch (error) {
          console.error("Error uploading and updating image:", error);
        }
      }

      fetchData();
      setEventIdToUpdate(null);
      setFormData({

        position: null,
        name: "",
        Session: null,
      });
      setUpdatedImage(null);
    }
  };

  const positionOptions = [
    { value: "Core", label: "Core Team Member" },
    { value: "ExCore", label: "Ex Core Team Member" },
    { value: "Lead", label: "Lead" },
    { value: "Colead", label: "Co Lead" },
    { value: "ExLead", label: "Ex Lead" },
    { value: "ExColead", label: "Ex Co Lead" },
  ];

  const SessionOptions = [
    { value: "2019 - 23", label: "2019 - 23" },
    { value: "2020 - 24", label: "2020 - 24" },
    { value: "2021 - 25", label: "2021 - 25" },
    { value: "2022 - 26", label: "2022 - 26" },
    { value: "2023 - 27", label: "2023 - 27" }
  ];
  const faculty = {
    name: 'Mr. Vishal Gupta',
    img: 'https://firebasestorage.googleapis.com/v0/b/fire-base-admin-page.appspot.com/o/images%2FMr%20Vishal%20Gupta.jpeg?alt=media&token=5bfc4ef4-d348-4f9c-a4bf-d58831a4293e',
    position: 'Assistant Professor, MMEC, MM(DU)',
  };

  return (


    <div className="tag" id="tag">
      {/* <div className="team-container" id="team-container">
      <h1>Faculty Advisor</h1>
      <div className="card-container">
        <div className="card">
          <img src={faculty.img} alt={faculty.name} />
          <h3>{faculty.name}</h3>
          <p>{faculty.position}</p>
        </div>
      </div>
    </div> */}
      <h1> Session {a.batch}</h1>
      <div className="imgslider">
        <Slider {...settings}>
          {events.map((event) => (
            <div className="slide" id="card" >
              <img src={event.imageUrl} />
              <h3>{event.name}</h3>
              <p>{event.position.label}</p>
              <p> Batch : {event.Session.label}</p>
            </div>
          ))}
        </Slider>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrevious}>
            <FaArrowLeft />
          </button>
          <button className="carousel-button" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Team



const a = {
  batch: "2023-24",


  member: [
    {
      name: "sakshi",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "lead",
    },
    {
      name: "sujal",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "co lead"
    },
    {
      name: "komal",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "core member"
    }, {
      name: "bajrang",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "core member"
    }, {
      name: "aaditya chaudhary",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: 'core member'
    }, {
      name: "rajvinder",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: " core member",
    }, {
      name: "sushant",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "core member"
    }, {
      name: "vansh",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "core member"
    }
  ]
}