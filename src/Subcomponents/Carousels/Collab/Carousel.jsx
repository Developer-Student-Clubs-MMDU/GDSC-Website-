import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import './Carousel.sass'




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


function Carousel() {


  const [slide, setSlide] = useState([{}]);
  const sliderRef = useRef(null);






  const Fetch = async () => {
    await getDocs(query(collection(db, "community"),))
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
      const eventCollection = collection(db, "community"); // Specify the correct path to your "Team" collection
      const q = query(eventCollection, ) // Create a query with the orderBy clause
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
    return (

        <div className="tagC">
            <div className="imgsliderC">
                <Slider {...settings}>
                    {events.map((event) => (
                        <div className="slideC" id="card" >
                            <img src={event.imageUrl} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel