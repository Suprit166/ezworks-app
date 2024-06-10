import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Invalid email format");
      return;
    }
    if (email.endsWith("@ez.works")) {
      setMessage("Emails ending with @ez.works are not allowed");
      return;
    }

    try {
      const response = await fetch('http://34.225.132.160:8002/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.status === 200) {
        setMessage("Form Submitted");
      } else {
        setMessage("Error submitting form");
      }
    } catch (error) {
      setMessage("Network error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email Address" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="email-input"
      />
      <button type="submit" className="submit-button">Contact Me</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default ContactForm;
