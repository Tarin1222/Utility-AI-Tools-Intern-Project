import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/contact", {
        email,
        message,
      });
      console.log(response.data);
      alert("Form submitted successfully!");
      setEmail("");    // clear email field
      setMessage("");  // clear message field
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      alert("Error submitting form");
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="yourmail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Your Message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="secondary-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
