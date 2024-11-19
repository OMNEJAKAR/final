import React, { useState } from "react";
import "./ReviewsPage.css";
import axios from "axios";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
const Reviews = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    rating: "",
    comments: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/reviews", formData); 
      setFormData({ employeeName: "", rating: "", comments: "" });
    } catch (error) {
      console.error(error);
      // ("An error occurred while submitting the review.");
    }
  };
  const body = {
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "0",
    backgroundColor:"blue"
  }



  return (
    <>
    <Header />
    <div  style={body}>

    
    <div className="app">
      <h1>Employer Review System</h1>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            placeholder="Enter employee name"
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rate between 1-5"
            min="1"
            max="5"
          />
        </div>
        <div className="form-group">
          <label>Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Write your comments"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit Review
        </button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Reviews;
