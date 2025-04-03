"use client";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function page() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:2000/api/review/");
        const data = await response.json();
        if (response.ok) {
          setReviews(data.data);
        } else {
          setError(data.message || "Failed to fetch reviews");
        }
      } catch (err) {
        setError("Error fetching reviews");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  React.useEffect(() => {
    const counters = document.querySelectorAll(".count");
    const countersQuantity = counters.length;
    const counter = [];

    for (let i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }

    const count = (start, value, id) => {
      let localStart = start;
      const interval = setInterval(() => {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        } else {
          clearInterval(interval);
        }
      }, 50);
    };

    for (let j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  }, []);
  return (
    <>
      <section>
        <img
          className="w-100 object-fit-cover brightness-60"
          height={650}
          src="./s4.jpg"
          alt="img"
        />
        <div className="overlay">
          <h2 className="border-left">ABOUT US</h2>
          <p>
            We offer all kinds of construction-related services for our clients.
            Whatever your task is, we can implement it. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Aperiam necessitatibus aliquam
            autem tenetur ut odit, officiis quisquam ipsam reprehenderit nihil!
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img className="w-100" src="/p4.jpg" alt="" />
              <h2 className="font-bold text-center fw-bold    ">CEO</h2>
            </div>
            <div className="col-lg-8 ">
              <div className="mx-5 text-justify">
                <p className="fs-5">
                  At Rising House Engineering Consultancy, we take pride in
                  being a leading engineering consultancy specializing in
                  building and road construction. With a team of experienced
                  professionals, we provide innovative, efficient, and
                  sustainable engineering solutions tailored to meet our
                  clients' needs. Our expertise spans structural design, project
                  management, feasibility studies, and construction supervision,
                  ensuring high-quality execution from planning to completion.
                  We are committed to delivering cost-effective, durable, and
                  safe infrastructure while adhering to industry standards and
                  environmental regulations.
                </p>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-8">
              <div className="">
                <p className="fs-5">
                  At Rising House Engineering Consultancy, we take pride in
                  being a trusted name in engineering consultancy, providing
                  innovative and reliable solutions in building and road
                  construction. Our commitment to excellence, sustainability,
                  and client satisfaction drives every project we undertake.
                  With a team of skilled professionals and cutting-edge
                  technology, we ensure high-quality engineering services that
                  meet global standards. Our vision is to transform
                  infrastructure with smart and efficient designs, fostering
                  growth and development in every community we serve. Whether
                  it's designing resilient structures or developing durable road
                  networks, we focus on delivering cost-effective, safe, and
                  sustainable solutions. We thank our clients, partners, and
                  dedicated team for their unwavering trust and support.
                  Together, we will continue to build a better, more
                  connected future.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="">
                <img className="w-100" src="/p1.jpg" alt="" />
                <h2 className="font-bold text-center my-2 fw-bold">CHAIRMAN</h2>
              </div>
            </div>
          </div>
        </div>
              
      </section>

      <section className="bg-1E3A8A py-5">
        <div className="container">
          <h1 className="fw-bold text-center text-white">BACKGROUNG</h1>
          <div className="row">
            <div className="col-lg-12 py-4 text-light">
              <p className="fs-5">
                RISING HOME ENGINEERING CONCULTANCY is established as a joint
                venture Company between ITECO Engineering Ltd. (Consulting firm
                of Switzerland with registered address at Alte Obfelderstrasse
                68, P.O. Box, CH-9810, Affolttern a/A, Switzerland) and Nepalese
                partners to meet the needs of a developing country like Nepal in
                the field of multi-disciplinary consulting services. The firm is
                registered with the Government of Nepal, Department of Industry
                as an engineering consulting firm in May 3, 1987 (BS:
                2044/01/20), and with the Tax Department and the VAT office (PAN
                500117642).The range of operation of the Firm includes diverse
                infrastructure development activities such as transport,
                communication, water supply and sanitation,etc.
              </p>
            </div>
            <div className="row py-4">
              <div className="col-lg-6">
                <div className="shadow my-3 bg-light rounded py-2">
                  <div className="text-center">
                    <img src="eye.png" alt="" />
                    <h3 className="fw-bold">OUR VISION</h3>
                  </div>
                  <ul className="py-2 fs-5">
                    <li>
                      To be renowned for our working methodologies, and human
                      resource capabilities.
                    </li>
                    <li>
                      To provide complete engineering solutions from project
                      identification to handover in sectors of energy, water
                      resource management and transportation.
                    </li>
                    <li>
                      To provide integrated investigations & research services
                      in survey & mapping, hydrology & sediment and geological
                      in all type of projects
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shadow my-3 bg-light rounded py-2">
                  <div className="text-center">
                    <img src="eye2.png" alt="" />
                    <h2 className="fw-bold">OUR MISSION</h2>
                  </div>
                  <ul className="py-3 fs-5">
                    <li>
                      Adopt our clients’ environmental challenges as our own.
                    </li>
                    <li>
                      Foster a culture of success for employees by sharing
                      equity ownership and rewarding employees when our clients
                      and company succeed.
                    </li>
                    <li>
                      Promote a sustainable environment through innovation and
                      the creative application and management strategies.
                    </li>
                    <li>Grow our business profitably.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*2 counter of about start */}
      <section className="py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shadow my-3 bg-warning rounded p-3">
                <h2 className="fw-bold">
                  <span className="count">60</span>k+ sq. f
                </h2>
                <p className="fw-bold">Built</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="shadow my-3 bg-warning rounded p-3">
                <h2 className="fw-bold">
                  <span className="count">2422</span>M
                </h2>
                <p className="fw-bold">Revenue</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="shadow my-3 bg-warning rounded p-3">
                <h2 className="fw-bold count">145</h2>
                <p className="fw-bold">Employees</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="shadow my-3 bg-warning rounded p-3">
                <h2 className="fw-bold count">300+</h2>
                <p className="fw-bold">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*2 counter end */}

      <section className="py-5 bg-1E3A8A">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="w-100"
                src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/6140a8502901a70022fb6a95_optimized_1169.webp"
                alt=""
              />
            </div>
            <div className="col-lg-6 shadow text-light py-2">
              <h1 className="fw-bold"> About Great House.</h1>
              <h4 className="my-4">
                We are experts in construction and engineering fields. Great
                House is the best choice for your project of any complexity.
              </h4>
              <p className="my-4">
                We are a leading construction company with 25+ years of
                experience in the industry. We are dedicated to providing a full
                suite of high-quality construction services driven by modern
                technologies. From residential construction to shopping centers
                and government facilities, no job is too big or too small for
                us.
              </p>
              <p>
                Our trustworthy business practices, efficient work processes,
                and a huge performance capacity ensure the Basalt's ability to
                deliver as promised.
              </p>
              <ul className="fw-bold text-warning d-flex flex-column gap-3">
                <li> Special rigger license holder.</li>
                <li> Asbestos certified сontractor.</li>
                <li> Certified roofing contractor.</li>
                <li> OSHA certified.</li>
              </ul>
            </div>
          </div>
        </div>
              
      </section>

      <section>
        <div className="container" style={{ marginTop: "2rem" }}>
          <div className="row my-5">
            <h1 className="fw-bold text-center my-5">Reviews</h1>
            {loading && <p>Loading reviews...</p>}
            {error && <p className="text-danger">{error}</p>}
            {reviews.length > 0 ? (
              reviews.slice(0, 6).map((review) => (
                <div key={review._id} className="col-lg-4">
                  <div className="review-card my-3">
                    <div className="stars">⭐ {review.rating}/5</div>
                    <div className="infos">
                      <p className="date-time">{new Date().toDateString()}</p>
                      <p className="description">{review.description}</p>
                    </div>
                    <div className="author">— {review.fullName}</div>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      </section>
      {/* our awards open */}
      <section className="py-5 bg-1E3A8A text-white">
        <div className="container">
          <h1 className="text-center fw-bold mb-5">OUR AWARD</h1>
          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="shadow m-3 p-3 rounded bg-light text-dark">
                <img width={100} src="./aaa.png" alt="awards" />
                <h4>AS USA Awards 2021</h4>
                <p>
                  We were ranked #1 at the professional AS USA Awards 2021
                  event. Thank you for your trust!
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="shadow m-3 p-3 rounded bg-light text-dark">
                <img width={100} src="./aaa.png" alt="awards" />
                <h4>Big Project Awards 2021</h4>
                <p>
                  Our big projects didn't go unnoticed. We received an award for
                  our New Exposure project in NY.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="shadow m-3 p-3 rounded bg-light text-dark">
                <img width={100} src="./aaa.png" alt="awards" />
                <h4>Construction Awards 2021</h4>
                <p>
                  Despite the tough year of 2021, we delivered all our projects
                  on time and received an award for that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our awards end */}
    </>
  );
}

export default page;
