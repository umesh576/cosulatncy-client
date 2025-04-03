"use client";
import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-6 col-lg-3 about-footer">
                <h3>Lorem Ipsum dummy text </h3>
                <ul>
                  <li>
                    <a href="tel:(010) 1234 4321">
                      <i className="fas fa-phone fa-flip-horizontal" />
                      (010) 1234 4321
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    1 / 105 Bay Lights,
                    <br />
                    Lorem Ipsum,
                    <br />
                    LIC 3201
                  </li>
                </ul>
                <a href="/contact" className="btn red-btn">
                  Contact Now
                </a>
              </div>
              <div className="col-md-6 col-lg-2 page-more-info">
                <div className="footer-title">
                  <h4>Page links</h4>
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/project">Project</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 page-more-info">
                <div className="footer-title">
                  <h4>More Info</h4>
                </div>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit amet</a>
                  </li>
                  <li>
                    <a href="#">Consectetur Adipisicing </a>
                  </li>
                  <li>
                    <a href="#">Ed do eiusmod tempor incididunt</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 open-hours">
                <div className="footer-title">
                  <h4>Open hours</h4>
                  <ul className="footer-social">
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <i className="far fa-clock" />
                        Monday Thursday
                      </td>
                      <td>9:00am - 5:00pm</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="far fa-clock" />
                        Friday
                      </td>
                      <td>9:00am - 4:00pm</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="far fa-clock" />
                        Sa turday
                      </td>
                      <td>9:00am - 1:30pm</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="far fa-clock" />
                        Sunday
                      </td>
                      <td>9:30am - 12:00pm</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <div className="footer-logo">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" />
                        </td>
                        <td>
                          <img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" />
                        </td>
                        <td>
                          <img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" />
                        </td>
                        <td>
                          <img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" />
                        </td>
                        <td>
                          <img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <div className="row">
              <div className="col-sm-4">
                <a href="#">Privacy policy</a>
              </div>
              <div className="col-sm-8">
                <p>Developed by Dominators @ 2025 All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
