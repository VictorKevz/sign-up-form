import React, { useState } from "react";
import "../css/Form.css";
import errorIcon from "../assets/images/icon-error.svg";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
  });
  const [isClicked, setIsClicked] = useState(false);
  const [isValid, setValid] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  
    // Let's validate email address
    let isValidEmail = true;
    if (name === "userEmail") {
      isValidEmail = /\S+@\S+\.\S+/.test(value);
    }
  
    // Update isValid based on whether all fields are not empty and email is valid
    let isValid = true;
    for (const field in formData) {
      if (formData[field].trim() === "" || (!isValidEmail && field === "userEmail")) {
        isValid = false;
        break;
      }
    }
  
    // Update states
    setValid(isValid);

  }
  
  

  function handleSubmission(event) {
    setIsClicked(true);
    if(isClicked && isValid){
      alert("Form Submiited")
      setFormData({
        firstName: "",
        lastName: "",
        userEmail: "",
        userPassword: "",
      })
    }
    event.preventDefault();
  }

  return (
    <div className="form-container">
      <div className="form-intro">
        <p>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </p>
      </div>
      <form className="form" onSubmit={handleSubmission}>
        <div
          className={`input-container ${
            isClicked && !isValid ? "error-active" : ""
          }`}
        >
          <input
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="Jonathan"
            onChange={handleChange}
          />
          {isClicked && !isValid && (
            <>
              <label className="error-message">
                First Name cannot be empty
              </label>
              <img src={errorIcon} alt="error-icon" className="error-icon" />
            </>
          )}
        </div>
        <div
          className={`input-container ${
            isClicked && !isValid ? "error-active" : ""
          }`}
        >
          <input
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
          />
          {isClicked && !isValid && (
            <>
              <label className="error-message">
                Last Name cannot be empty
              </label>
              <img src={errorIcon} alt="error-icon" className="error-icon" />
            </>
          )}{" "}
        </div>
        <div
          className={`input-container ${
            isClicked && !isValid ? "error-active" : ""
          }`}
        >
          <input
            name="userEmail"
            value={formData.userEmail}
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          {isClicked && !isValid && (
            <>
              <label className="error-message">
              Looks like this is not an email
              </label>
              <img src={errorIcon} alt="error-icon" className="error-icon" />
            </>
          )}{" "}
        </div>
        <div
          className={`input-container ${
            isClicked && !isValid ? "error-active" : ""
          }`}
        >
          <input
            name="userPassword"
            value={formData.userPassword}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {isClicked && !isValid && (
            <>
              <label className="error-message">
              Password cannot be empty
              </label>
              <img src={errorIcon} alt="error-icon" className="error-icon" />
            </>
          )}{" "}
        </div>
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <footer>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </footer>
      </form>
    </div>
  );
}

export default Form;
