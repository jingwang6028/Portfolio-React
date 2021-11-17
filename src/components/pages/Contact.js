import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // handle input change
  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // handle submit form
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name is invalid");
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <form className="contact-form">
        <div className="mb-3 d-flex flex-column">
          <label for="name" className="form-label">
            name:
          </label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="name"
            className="form-control"
          />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label for="email" className="form-label">
            Email address:
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message:
          </label>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            className="form-control message-box"
            id="message"
          ></input>
        </div>
        <button className="btn" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
