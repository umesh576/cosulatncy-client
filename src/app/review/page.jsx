"use client";
import React, { useState } from "react";

function ReviewPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    if (!formData.rating || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Rating and review message are required",
      });
      return;
    }
    try {
      const response = await fetch("http://localhost:2000/api/review/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          rating: parseFloat(formData.rating),
          description: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSubmitStatus({
        success: true,
        message: "Review submitted successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        rating: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || "Failed to submit review",
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
    <div>
      <div className="contact-page">
        <h1 className="text-center font-bold">Review Us</h1>
        <div className="contact">
          <form className="form my-5" onSubmit={handleSubmit}>
            {submitStatus && (
              <div
                className={`alert ${
                  submitStatus.success ? "alert-success" : "alert-danger"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <div>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="form-control"
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                value={formData.rating}
                onChange={handleChange}
                min="1"
                max="5"
                step="0.1"
                required
              />
              <textarea
                className="form-control"
                name="message"
                placeholder="Enter your review"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
