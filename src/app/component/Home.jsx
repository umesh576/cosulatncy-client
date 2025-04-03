"use client";
import React from "react";
import Slider from "./Slider";
import Link from "next/link";

function Home() {
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
      {/* first page */}
      <section>
        <Slider />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="overlay">
                <h2>YOUR VISION OUR BLUEPRINT</h2>
                <p>
                  You can dream, create, design, and build the most wonderful
                  place in the world. But it requires people to make the dream a
                  reality. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptate eaque hic voluptatem adipisci beatae velit
                  voluptates sequi facere fuga autem!
                </p>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
      {/* first page end */}

      {/* second page start */}
      <section className="bg-1E3A8A text-light">
        <div className="container py-5">
          <div className="row ">
            <div className="col-lg-6">
              <div className="p3">
                <img className="w-100" src="s2.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="px-3">
                <h1 className="border-l fw-bold">Shortly About Us.</h1>
                <h4 className="py-2">
                  We offer residential and commercial construction services
                  throughout the USA.
                </h4>
                <p>
                  We are a leading construction company with 30+ years of
                  experience in the industry. We are dedicated to providing the
                  highest quality construction services to our customers meeting
                  their special needs on schedule and within their budgets.
                  Client satisfaction is always our first priority. <br />{" "}
                  <br />
                  We are engaged in construction of industrial, residential,
                  commercial, healthcare, and other types of buildings.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <div className="shadow rounded p-3 bg-light text-dark">
                    <span className="fw-bold text-warning fs-1">
                      <span className="count">300</span>+
                    </span>
                    <p className="fw-bold">Satisfied clients</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="shadow rounded p-3 bg-light text-dark">
                    <span className="fw-bold text-warning fs-1">
                      <span className="count">60</span>k+
                    </span>
                    <p className="fw-bold">Sq ft built</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="shadow rounded p-3 bg-light text-dark">
                    <span className="fw-bold text-warning fs-1 count">25</span>
                    <p className="fw-bold">Years on the market</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second page end */}

      {/* third page start */}
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="my-3">
                <h1 className="fw-bold">
                  We Deliver the Best Services in Different Sectors.
                </h1>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-lg-6">
              <h5>
                Our team provides expert services in different fields of
                construction.
              </h5>
            </div>
            <div className="col-lg-6 text-end">
              <Link href="/services" className="fw-bold">
                VIEW ALL SECTORS
              </Link>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-lg-4">
              <div className="shadow p-4 my-3 bg-1E3A8A text-light rounded">
                <h3>Commercial</h3>
                <p>
                  We perform high-quality commercial projects of any complexity.
                </p>
                <Link href="#" className="text-warning">
                  Learn more..
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadow p-4 my-3 bg-1E3A8A text-light rounded">
                <h3>Residential</h3>
                <p>
                  We perform high-quality commercial projects of any complexity.
                </p>
                <Link href="#" className="text-warning">
                  Learn more..
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadow p-4 my-3 bg-1E3A8A text-light rounded">
                <h3>Interiors</h3>
                <p>
                  We perform high-quality commercial projects of any complexity.
                </p>
                <Link href="#" className="text-warning">
                  Learn more..
                </Link>
              </div>
            </div>
            <h5 className="my-4">
              We offer high-quality construction solutions.{" "}
              <span className="text-warning fw-bold">
                {" "}
                Build Your Dream Now!
              </span>
            </h5>
          </div>
        </div>
      </section>
      {/* third page end */}

      {/* PROJECTS fourth page start */}
      <section className="py-5 bg-1E3A8A text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="fw-bold">
                We Are Very Proud to Present You Our Latest Projects.
              </h1>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-lg-6">
              <h5>Together we build our future we'll live in.</h5>
            </div>
            <div className="col-lg-6 text-end">
              <Link href="/project" className="fw-bold text-warning">
                ALL PROJECTS
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="p-4">
                <img className="w-100" src="./s3.jpg" alt="img" />
                <h4 className="py-2 fw-bold">Neal Complex</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt ab minus odit nisi nam, voluptate adipisci aliquid ad
                  labore, inventore odio, quae temporibus veniam magni. Impedit
                  qui eligendi illum veniam.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4">
                <img className="w-100" src="./s5.jpg" alt="img" />
                <h4 className="py-2 fw-bold">Ravi Vhawan</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt ab minus odit nisi nam, voluptate adipisci aliquid ad
                  labore, inventore odio, quae temporibus veniam magni. Impedit
                  qui eligendi illum veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS fourth page end */}

      {/* Experts six page start */}
      <section className="py-5 bg-1E3A8A text-white">
        <div className="container">
          <h1 className="my-5 fw-bold text-center">OUR EXPERTS</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="box-container">
                <img className="w-100" src="./p1.jpg" alt="expert" />
                <span className="hover-text">
                  Henry Lucas Chairman of the Board ECS Group of Companies
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box-container">
                <img className="w-100" src="./p2.jpg" alt="expert" />
                <span className="hover-text">
                  Jimmy Carpen Chief Engineer ECS Group of Companies
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box-container">
                <img className="w-100" src="./p4.jpg" alt="expert" />
                <span className="hover-text">
                  Tony Fiorillo, President + CEO ECS Group of Companies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experts six page end */}

      <section className="bg-1E3A8A text-white">
        <div className="container text-center">
          <h1 className="text-center fw-bold">OUR PARTNERS</h1>
          <img className="w-50" src="./par.png" alt="iconn" />
        </div>
      </section>
    </>
  );
}

export default Home;
