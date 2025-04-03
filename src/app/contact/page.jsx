"use client";
import React, { useState } from "react";
import ReviewPage from "../review/page";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:2000/api/contact/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSubmitStatus({
        success: true,
        message: "Message sent successfully!",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || "Failed to send message",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container my-5">
      <section className="my-5 d-flex justify-content-center">
        <form className="form my-5" onSubmit={handleSubmit}>
          <h1 className="text-center">CONTACT US</h1>
          {submitStatus && (
            <div
              className={`alert ${
                submitStatus.success ? "alert-success" : "alert-danger"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="input-container">
            <input
              className="form-control"
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <span></span>
          </div>

          <div className="input-container">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span></span>
          </div>

          <div className="input-container">
            <input
              className="form-control"
              type="tel"
              name="phoneNumber"
              placeholder="Enter Phone no."
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <span></span>
          </div>

          <div className="input-container">
            <textarea
              className="form-control"
              name="message"
              placeholder="Enter your message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span></span>
          </div>

          <button type="submit" className="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
      <ReviewPage />
      <iframe
        className="w-100 h100"
        height={400}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.2795352824503!2d85.31980345938358!3d27.70001971562893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198c3396ccc9%3A0x9f8d87aa236a99bf!2sHimalayan%20WhiteHouse%20International%20College%2C%20Putalisadak!5e0!3m2!1sen!2snp!4v1742856589743!5m2!1sen!2snp"
      ></iframe>
    </div>
  );
}

export default ContactPage;
