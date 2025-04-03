"use client";
import React, { useEffect, useState } from "react";

function Page() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/service/see");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && result.data) {
          setServices(result.data);
        } else {
          console.error("API Error:", result.message);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <section>
        <img
          className="w-100 object-fit-cover brightness-60"
          height={650}
          src="./s2.jpg"
          alt="img"
        />
        <div className="overlay">
          <h2 className="border-left">OUR SERVICES</h2>
          <p>
            We offer all kinds of construction-related services for our clients.
            Whatever your task is, we can implement it. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Aperiam necessitatibus aliquam
            autem tenetur ut odit, officiis quisquam ipsam reprehenderit nihil!
          </p>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <h1 className="text-center fw-bold text-center my-5">
              Our Services
            </h1>
            <div className="services row">
              {loading ? (
                <p className="text-center">Loading services...</p>
              ) : services.length > 0 ? (
                services.map((service) => (
                  <div key={service._id} className="col-lg-4 mb-4">
                    <div className="h-100 shadow rounded">
                      <img
                        src={
                          service.coverImage?.length > 0
                            ? `http://localhost:2000/api/uploads/${service.coverImage[0]}`
                            : "/fallback.jpg"
                        }
                        alt={service.name}
                        className="service-img img-fluid"
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                        onError={(e) => {
                          // Only set fallback if not already using it
                          if (!e.target.src.includes("fallback.jpg")) {
                            e.target.src = "/fallback.jpg"; // Use a different name
                            e.target.onerror = null; // Prevent infinite loop
                          }
                        }}
                      />
                      <div className="p-3">
                        <h3>{service.name}</h3>
                        <p className="text-muted">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No services available</p>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES fifth page start */}
      <section className="container py-5"></section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="b-container">
                <div className="my-3">
                  <img className="w-100" src="./b1.png" alt="bulding" />
                </div>
                <span className="h-text">
                  BUILDING AND HOUSE DEVELOPMENT 20+ House and Building built up
                  area in Kathmandu valley
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="b-container">
                    <div className="my-3">
                      <img className="w-100" src="./water.png" alt="bulding" />
                    </div>
                    <span className="h-text">
                      WATER SUPPLY Feasibility Study of 500+ km of Bulk water
                      supply transmission pipeline system
                    </span>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="b-container">
                    <div className="my-3">
                      <img
                        className="w-100"
                        src="./transport.png"
                        alt="bulding"
                      />
                    </div>
                    <span className="h-text">
                      TRANSPORTATION 4 Lane Urban road of ~3 km in Kathmandu
                    </span>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="b-container">
                    <div className="my-3">
                      <img
                        className="w-100"
                        src="./communication.png"
                        alt="bulding"
                      />
                    </div>
                    <span className="h-text">
                      COMMUNICATION Safeguards Implementation and Monitoring
                      works of over 300 km of Transmission line
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES fifth page end */}
    </>
  );
}

export default Page;
