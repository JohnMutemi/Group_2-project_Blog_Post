import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import './ContactForm.css'; // Import CSS file

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      to_email: "kitui.kelly@gmail.com", // Add your email address here
    };
    emailjs.send("service_id", "template_id", templateParams, "user_id").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setSubmitting(false);
      },
      (err) => {
        console.log("FAILED...", err);
        setError(true);
        setSubmitting(false);
      }
    );
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5} // Increase the number of rows
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={submitting}>
          Send
        </Button>
        {success && (
          <Alert variant="success" className="mt-3">
            Message sent successfully!
          </Alert>
        )}
        {error && (
          <Alert variant="danger" className="mt-3">
            Message sent successfully!
          </Alert>
        )}
      </Form>
    </div>
  );
};

export default ContactForm;
