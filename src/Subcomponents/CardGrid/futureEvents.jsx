import React, { useEffect, useState } from "react";
import "./Card.sass";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import { query, orderBy } from "firebase/firestore";
import { storage } from "../../Firebase";


// Your code here...

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




function Futureevent() {
  const [event, setevent] = useState([]);
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    date: null,
    finishTime: null,
    startTime: null,
    status: null,
    title: "",
    venue: null,
  });
  const [updatedImage, setUpdatedImage] = useState(null);
  const [eventIdToUpdate, setEventIdToUpdate] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const eventCollection = collection(db, "Events"); // Specify the correct path to your "event" collection
      const q = query(eventCollection, orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
  
      const Futureevent = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      setevent(Futureevent);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (eventId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (shouldDelete) {
      const eventDocRef = doc(db, "event", eventId);
      await deleteDoc(eventDocRef);
      fetchData();
    }
  };

  const handleEdit = (event) => {
    setEventIdToUpdate(event.id);
    setFormData({
      date: event.date.toDate(),
      finishTime: event.finishTime.toDate(),
      startTime: event.startTime.toDate(),
      status: event.status,
      title: event.title,
      venue: event.venue,
    });
  };

  const handleCancelEdit = () => {
    setEventIdToUpdate(null);
    setFormData({
      date: null,
      finishTime: null,
      startTime: null,
      status: null,
      title: "",
      venue: null,
    });
    setUpdatedImage(null);
  };

  const handleUpdate = async () => {
    if (eventIdToUpdate) {
      const eventDocRef = doc(db, "Events", eventIdToUpdate);
      await updateDoc(eventDocRef, {
        date: formData.date,
        finishTime: formData.finishTime,
        startTime: formData.startTime,
        status: formData.status,
        title: formData.title,
        venue: formData.venue,
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
        date: null,
        finishTime: null,
        startTime: null,
        status: null,
        title: "",
        venue: null,
      });
      setUpdatedImage(null);
    }
  };

  const statusOptions = [
    { value: "upcoming", label: "Upcoming" },
    { value: "past", label: "Past" },
  ];

  const venueOptions = [
    { value: "block1", label: "Engineering Block-1" },
    { value: "block2", label: "Engineering Block-2" },
    { value: "block3", label: "Engineering Block-3" },
  ];

  return (
  


    <div className="E-SC-container">
      {event.map((event) => {
        const currentTimestamp = Date.now();
        const eventTimestamp = event.TimeStamp?.toMillis() || 0;
        const isPastEvent = eventTimestamp < currentTimestamp;

        return (
          <div className="E-SC-1" key={event.id}>
            <div className="E-SC-1-1">
              <img src={event.imageUrl} alt="" />
            </div>
            <div className="E-SC-1-2">
              <table>
                <tr>
                  <td colSpan="2" id="head">
                    {event.title}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" id="subhead">
                    Details
                  </td>
                </tr>
                <tr>
                  <td>Date :</td>
                  <td>{event.date.toDate().toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td>Time :</td>
                  <td>
                    {" "}
                    {event.startTime.toDate().toLocaleTimeString()} to {event.finishTime.toDate().toLocaleTimeString()}{" "}
                  </td>
                </tr>
                <tr>
                  <td>Venue : </td>
                  <td>{event.venue.label}</td>
                </tr>

              </table>
              <button>
              {isPastEvent ? (
                      <span>Registration Closed</span>
                    ) : (
                      <Link to={event.form}>Register</Link>
                    )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Futureevent;
