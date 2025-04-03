"use client";
import React, { useState } from "react";

function page() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    projectTopic: "",
    startDate: "",
    lastdate: "",
    requirement: "",
    location: "",
    coverImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, coverImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(
        "http://localhost:2000/api/giveproject/add",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      const result = await response.json();
      if (result.success) {
        alert("Project submitted successfully!");
        setShowForm(false);
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting project:", error);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center my-5 py-5">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-6 my-5 py-3 rounded-lg shadow-md hover:bg-blue-600 transition ease-in-out duration-200"
        >
          Add Project
        </button>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-4 p-6 border-2 border-gray-200 rounded-lg shadow-lg bg-white"
          >
            <label className="block font-semibold text-lg text-gray-700">
              Project Topic:
              <input
                type="text"
                name="projectTopic"
                value={formData.projectTopic}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block font-semibold text-lg text-gray-700 mt-4">
              Start Date:
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block font-semibold text-lg text-gray-700 mt-4">
              Last Date:
              <input
                type="date"
                name="lastdate"
                value={formData.lastdate}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block font-semibold text-lg text-gray-700 mt-4">
              Requirement:
              <input
                type="text"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block font-semibold text-lg text-gray-700 mt-4">
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block font-semibold text-lg text-gray-700 mt-4">
              Cover Image:
              <input
                type="file"
                name="coverImage"
                onChange={handleFileChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition ease-in-out duration-200"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default page;
