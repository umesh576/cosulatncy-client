"use client";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+ app directory

import { useState } from "react";
import login from "../login/page";

function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const router = useRouter(); // Initialize the router

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:2000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log("Response Status: ", response.status); // Check status code

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      console.log("Response Data: ", data);
      setMessage(data.message); // Display any message received from API (if available)
      router.push("/login");
    } catch (error) {
      console.error("Error during fetch:", error);
      setMessage("Error occurred during registration");
    }
  };

  return (
    <div className="container py-5">
      <section className="my-5 d-flex justify-content-center">
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app.</p>
          {message && <p className="alert">{message}</p>}

          <div className="flex">
            <label>
              <input
                required
                type="text"
                name="firstName"
                className="input"
                value={formData.firstName}
                onChange={handleChange}
              />
              <span>Firstname</span>
            </label>
            <label>
              <input
                required
                type="text"
                name="lastName"
                className="input"
                value={formData.lastName}
                onChange={handleChange}
              />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input
              required
              type="number"
              name="phoneNumber"
              className="input"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <span>Phone Number</span>
          </label>
          <label>
            <input
              required
              type="email"
              name="email"
              className="input"
              value={formData.email}
              onChange={handleChange}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              required
              type="password"
              name="password"
              className="input"
              value={formData.password}
              onChange={handleChange}
            />
            <span>Password</span>
          </label>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Page;
