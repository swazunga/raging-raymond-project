import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Registration() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    participants: "",
  });
  const { name, email, participants } = formState;
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    e.target.reset();
    // alert("Registration submitted!");
    setErrorMessage("Registration Submitted!");
  }
  return (
    <div className="row justify-content-evenly">
      
      <div className="col-lg-4 col-sm-12">
        <h2 data-testid="h1tag" className="mb-3">Fluke Tournament Registration</h2>
        <p>Register using this form to participate in our annual Fluke Tournament. Taking place in CITY, STATE each year, this event is an exciting opportunity to test your mettle as an angler and to support a great cause.</p>
        <p>Once you have registered we will be in touch with more information and updates. We look forward to seeing you soon, and thank you for your support!</p>
        <div id="address-container mt-3">
            <h4>Tournament Location</h4>
            <h5>Address</h5>
            <h5>City</h5>
            <h5>State</h5>
            <h5>Zip</h5>
          </div>
      </div>


      <div className="col-lg-6 col-sm-12">
        <form id="contact-form" onSubmit={handleSubmit}>
          <h2 className="mb-3">Registration Form</h2>
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" name="name" className="form-control mb-3" onBlur={handleChange} />
          
          
            <label htmlFor="email" className="form-label">Email address:</label>
            <input type="email" name="email" className="form-control mb-3" onBlur={handleChange} />
          
          
            <label htmlFor="participants" className="form-label">Participants:</label>
            <input name="participants" defaultValue="" className="form-control mb-3" onBlur={handleChange} />
          
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
