import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { useMutation } from "@apollo/client";
import { ADD_REGISTRANT } from "../../utils/mutations";
import { QUERY_REGISTRANTS } from "../../utils/queries";
import Hero from "../Hero";

function Registration() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    participants: "",
  });

  const [addRegistrant, { error }] = useMutation(ADD_REGISTRANT, {
    update(cache, { data: { addRegistrant } }) {
      //   const { registrants } = cache.readQuery({ query: QUERY_REGISTRANTS });
      //   cache.writeQuery({
      //     query: QUERY_REGISTRANTS,
      //     data: { registrants: [addRegistrant, ...registrants] },
      //   });
    },
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
    try {
      addRegistrant({
        variables: { name, email, participants: parseInt(participants, 10) },
      });
      e.target.reset();
      setErrorMessage("Registration Submitted!");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
    <Hero/>
    <div className="container min-height">
      <div className="row justify-content-evenly">
        <div className="col-lg-4 col-sm-12">
          <h2 data-testid="h1tag" className="register-header">
            Fluke Tournament Registration
          </h2>
          <p>
            Register using this form to participate in our annual Fluke
            Tournament. Taking place in a set territory off the coast of New
            Jersey each year, this event is an exciting opportunity to test your
            mettle as an angler and to support a great cause.
          </p>
          <p>
            Once you have registered we will be in touch with more information
            and updates. We look forward to seeing you soon, and thank you for
            your support!
          </p>
          <div id="address-container" className="text-center">
            <h4>Tournament Location</h4>
            <h5>Captain Mike's Marina</h5>
            <h5>630 Great Bay Blvd</h5>
            <h5>Tuckerton, NJ 08087</h5>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <form id="contact-form" onSubmit={handleSubmit}>
            <h2 className="mb-3">Registration Form</h2>
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              onBlur={handleChange}
            />

            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              onBlur={handleChange}
            />

            <label htmlFor="participants" className="form-label">
              Number of Participants:
            </label>
            <input
              name="participants"
              defaultValue=""
              className="form-control mb-3"
              onBlur={handleChange}
            />

            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button
              data-testid="button"
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Registration;
