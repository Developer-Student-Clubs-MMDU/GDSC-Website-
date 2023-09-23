import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.scss";
import ThankYouPage from "../Thank/thanks";

const StudentInterviewForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    rollNo: "",
    email: "",
    areaOfInterest: "", // Change to empty string for default value
    mobileNo: "",
    section: "",
    stream: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const areaOfInterestOptions = [
    "Web",
    "AI / ML",
    "Blockchain",
    "Video and Photo Editing",
    "Android Development",
    "UI / UX Designing",
    "Cloud"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submissionStatus === null) {
      try {
        setSubmissionStatus("submitting");

        fetch(
          "",
          {
            mode: "no-cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        setSubmissionStatus("success");
        navigate("/ThankYou");
      } catch (error) {
        setSubmissionStatus("error");
        navigate("/ThankYou");
      }
    }
  };

  if (submissionStatus === "success") {
    navigate("/ThankYou");
  } else if (submissionStatus === "error") {
    navigate("/ThankYou");
  }

  return (
    <div className="container">
      {/* <h5>Contact Me</h5> */}
      The Google DSC-MM(DU) application form is now closed. Thank you for your overwhelming response. Interviews for shortlisted candidates will be held on 19th August. Get ready to shine!
      {/* <form className="content__form" onSubmit={handleSubmit}>
        <h4>Recruitment Form</h4>
        <label className="form-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <span>Full Name</span>
        </label>
        <label className="form-group">
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
          <span>Roll No</span>
        </label>
        <label className="form-group">
          <input
            type="tel"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
          <span>Mobile No.</span>
        </label>
        <label className="form-group">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span>Email</span>
        </label>

<label className="form-group">
  <div className="custom-dropdown">
    <select
      name="areaOfInterest"
      value={formData.areaOfInterest}
      onChange={handleChange}
      required
    >
      <option value="">Area of interest</option>
      {areaOfInterestOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
</label>
<label className="form-group">
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          />
          <span>Section</span>
        </label>
        <label className="form-group">
          <input
            type="text"
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            required
          />
          <span>Stream</span>
        </label>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form> */}
      
    </div>
  );
};

export default StudentInterviewForm;
