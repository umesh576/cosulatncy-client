"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("head");
      const nav = document.querySelector("nav");
      if (header) {
        if (
          document.body.scrollTop > 110 ||
          document.documentElement.scrollTop > 110
        ) {
          header.style.position = "fixed";
          header.style.top = "0px";
          header.style.width = "100%";
          nav.style.filter = "brightness(100%)";
          nav.style.opacity = "95%";
          header.style.zIndex = "100";
        } else {
          header.style.top = "0px";
          header.style.position = "relative";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header id="head">
        <nav className="navbar navbar-expand-sm navbar-dark bg-1E3A8A">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image
                src="/logo.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "50%", height: "auto" }}
                alt="img"
              />
            </Link>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0 gap-5">
                <li className="nav-item">
                  <Link className="nav-link " href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " href="/about">
                    {" "}
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " href="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " href="/project">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/contact">
                    Contact us
                  </a>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " href="/login">
                    <img
                      className="acc-icon"
                      src="./acc.png"
                      alt="account-icon"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
