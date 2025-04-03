"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function CompletedProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [onproject, setOnprojects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/project/get");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const result = await response.json();

        if (result.success) {
          // Normalize image paths
          const normalizedProjects = result.data.map((project) => ({
            ...project,
            coverImage:
              project.coverImage?.map(
                (img) => img.replace(/\\/g, "/") // Convert backslashes to forward slashes
              ) || [],
          }));
          setProjects(normalizedProjects);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/giveproject/");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const result = await response.json();

        if (result.success) {
          // Normalize image paths
          const normalizedProjects = result.data.map((project) => ({
            ...project,
            coverImage:
              project.coverImage?.map(
                (img) => img.replace(/\\/g, "/") // Convert backslashes to forward slashes
              ) || [],
          }));
          setOnprojects(normalizedProjects);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {/* ... Hero Section remains same ... */}

      {/* Projects Section */}
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-5 fw-bold">Our Completed Projects</h1>
          <div className="row">
            {" "}
            {/* Added row for proper grid layout */}
            {loading ? (
              <p className="text-center">Loading projects...</p>
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <div key={project._id} className="col-md-4 mb-4">
                  <div className="project-card h-100 shadow rounded">
                    <div
                      className="image-container"
                      style={{ width: "100%", overflow: "hidden" }}
                    >
                      {project.coverImage?.length > 0 ? (
                        <img
                          src={
                            project.coverImage?.length > 0
                              ? `http://localhost:2000/api/uploads/${project.coverImage[0]}`
                              : "/fallback.jpg"
                          }
                          alt={project.projectName}
                          className="project-img img-fluid rounded"
                          style={{ width: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <div className="d-flex align-items-center justify-content-center bg-secondary h-100">
                          <span className="text-white">No Image Available</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 my-1 mx-2">
                      <h3 className="">{project.projectName}</h3>
                      <div className="project-details">
                        <p className="text-muted mb-1">
                          <strong>Location:</strong> {project.location}
                        </p>
                        <p className="text-muted">
                          <strong>Completion Date:</strong>{" "}
                          {new Date(project.finalDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No projects available</p>
            )}
          </div>
          <div className="on_porject my-5">
            <h1 className="fw-bold text-center my-3">Requested Project</h1>
            <div className="Ongoing-project">
              <div className="row">
                {" "}
                {/* Added row for proper grid layout */}
                {loading ? (
                  <p className="text-center">Loading projects...</p>
                ) : onproject.length > 0 ? (
                  onproject.map((project) => (
                    <div key={project._id} className="col-md-4 mb-4">
                      <div className="project-card h-100 p-3 shadow rounded">
                        <div
                          className="image-container"
                          style={{
                            width: "100%",
                            height: "250px",
                            overflow: "hidden",
                          }}
                        >
                          {project.coverImage?.length > 0 ? (
                            <img
                              src={
                                project.coverImage?.length > 0
                                  ? `http://localhost:2000/api/uploads/${project.coverImage[0]}`
                                  : "/fallback.jpg"
                              }
                              alt={project.projectName}
                              className="project-img img-fluid rounded"
                              style={{ width: "100%", objectFit: "cover" }}
                            />
                          ) : (
                            <div className="d-flex align-items-center justify-content-center bg-secondary h-100">
                              <span className="text-white">
                                No Image Available
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="mt-3 my-1 mx-2">
                          <h3>{project.projectName}</h3>
                          <div className="project-details">
                            <p className="text-muted mb-1">
                              <strong>Location:</strong> {project.location}
                            </p>
                            <p className="text-muted">
                              <strong>Completion Date:</strong>{" "}
                              {new Date(project.finalDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">No onproject available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... CTA Section remains same ... */}
    </>
  );
}

export default CompletedProjectsPage;
