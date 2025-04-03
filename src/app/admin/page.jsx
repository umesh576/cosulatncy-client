"use client";
import React, { useState } from "react";

function Page() {
  const [users, setUsers] = useState([]); // Store fetched users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false); // New state for Add Service form
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectManager: "",
    location: "",
    finalDate: "",
    coverImage: null,
  });
  const [serviceData, setServiceData] = useState({
    serviceName: "",
    description: "",
    coverImage: null,
  });

  // Fetch users
  const handleGetUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:2000/api/user/");
      const data = await response.json();
      if (response.ok) {
        setUsers(data.data);
      } else {
        setError(data.message || "Failed to fetch users");
      }
    } catch (err) {
      setError("Error fetching users");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Show Add Project Form
  const handleAddCompleteProject = () => {
    setShowProjectForm(true);
  };

  // Show Add Service Form
  const handleAddService = () => {
    setShowServiceForm(true);
  };

  // Handle project form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  // Handle service form changes
  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  // Handle file change for project
  const handleFileChange = (e) => {
    setProjectData({ ...projectData, coverImage: e.target.files[0] });
  };

  // Handle file change for service
  const handleServiceFileChange = (e) => {
    setServiceData({ ...serviceData, coverImage: e.target.files[0] });
  };

  // Submit project form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectName", projectData.projectName);
    formData.append("projectManager", projectData.projectManager);
    formData.append("location", projectData.location);
    formData.append("finalDate", projectData.finalDate);
    if (projectData.coverImage) {
      formData.append("coverImage", projectData.coverImage);
    }

    try {
      const response = await fetch("http://localhost:2000/api/project/add", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Project added successfully!");
        setShowProjectForm(false);
        setProjectData({
          projectName: "",
          projectManager: "",
          location: "",
          finalDate: "",
          coverImage: null,
        });
      } else {
        alert(result.message || "Failed to add project");
      }
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Error adding project");
    }
  };

  // Submit service form
  const handleSubmitService = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("serviceName", serviceData.serviceName);
    formData.append("description", serviceData.description);
    if (serviceData.coverImage) {
      formData.append("coverImage", serviceData.coverImage);
    }

    try {
      const response = await fetch("http://localhost:2000/api/service/add", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Service added successfully!");
        setShowServiceForm(false);
        setServiceData({
          serviceName: "",
          description: "",
          coverImage: null,
        });
      } else {
        alert(result.message || "Failed to add service");
      }
    } catch (error) {
      console.error("Error adding service:", error);
      alert("Error adding service");
    }
  };

  return (
    <section>
      <div className="admin-profile my-5 py-5">
        <h1 className="admin-name">Admin Page</h1>
        <div className="admin-actions">
          {/* Fetch Users Section */}
          <div className="d-flex border-bottom my-4 justify-content-between align-items-center">
            <h3>Get Users</h3>
            <button className="btn btn-warning" onClick={handleGetUser}>
              {loading ? "Loading..." : "View"}
            </button>
          </div>

          {error && <p className="text-danger">{error}</p>}

          {/* User Data Table */}
          <div className="UserContainer">
            {users.length > 0 && (
              <table className="table table-bordered mt-3">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Add Complete Project Button */}
          <div className="d-flex border-bottom my-4 justify-content-between align-items-center">
            <h3>Add Complete Project</h3>
            <button className="btn btn-info" onClick={handleAddCompleteProject}>
              Add
            </button>
          </div>

          {/* Add Complete Project Form */}
          {showProjectForm && (
            <div className="CompContainer mt-3 p-4 border">
              <h3>Add Complete Project</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Project Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="projectName"
                    value={projectData.projectName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Project Manager</label>
                  <input
                    type="text"
                    className="form-control"
                    name="projectManager"
                    value={projectData.projectManager}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={projectData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Final Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="finalDate"
                    value={projectData.finalDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Cover Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="coverImage"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => setShowProjectForm(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}

          {/* Add Service Button */}
          <div className="d-flex border-bottom my-4 justify-content-between align-items-center">
            <h3>Add Service</h3>
            <button className="btn btn-info" onClick={handleAddService}>
              Add
            </button>
          </div>

          {/* Add Service Form */}
          {showServiceForm && (
            <div className="ServiceContainer mt-3 p-4 border">
              <h3>Add Service</h3>
              <form onSubmit={handleSubmitService}>
                <div className="mb-3">
                  <label className="form-label">Service Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="serviceName"
                    value={serviceData.serviceName}
                    onChange={handleServiceChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={serviceData.description}
                    onChange={handleServiceChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Cover Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="coverImage"
                    onChange={handleServiceFileChange}
                    accept="image/*"
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => setShowServiceForm(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Page;
