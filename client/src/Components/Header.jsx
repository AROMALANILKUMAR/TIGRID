import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../Logos/dummy logo01 2.png";

function Header() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link">
                      <img src={logo1} alt="Bootstrap" className="logo-img" />
                    </a>
                  </li>
                </ul>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Who We Serve</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <span
                          class="material-symbols-outlined"
                          style={{
                            backgroundColor: "transparent",
                            color: "gray",
                          }}
                        >
                          close
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
