import React from 'react';

import "./Contact.css";

import ContactUs from "../../Components/ContactUs/ContactUs";
import ContactImg from "../../img/contact.jpeg";

const Contact = () => {
  return (
    <div id="contactPage">
      <p id="useForm">Please use the form below to contact us!</p>
      <ContactUs />
    </div>
  )
}

export default Contact