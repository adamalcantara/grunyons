// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import "./ContactUs.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvolyynl");
  if (state.succeeded) {
    return <p>Thanks for contacting us! We will respond to you shortly.</p>;
  }
  return (
    <form onSubmit={handleSubmit} id="contactUsForm">
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        className="formElement"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="formElement"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        className="formElement"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} id="submitBtn">
        Submit
      </button>
    </form>
  );
}
function ContactUs() {
  return (
    <ContactForm />
  );
}
export default ContactUs;
