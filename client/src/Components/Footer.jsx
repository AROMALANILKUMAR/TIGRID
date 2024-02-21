import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo2 from "../Logos/dummy logo01 3.png";

function Footer() {
  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "black" }}
    >
      <div className="container" style={{ backgroundColor: "black" }}>
        <div className="row">
          <div
            className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
            style={{ color: "white", fontSize: "10px" }}
          >
            <img src={logo2} alt="Bootstrap" className="logo-img" />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt
            distinctio, delectus optio reiciendis dicta magni accusamus quam
            itaque provident temporibus
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            <br />
            <br />
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="lorem ipsum"
              />
              <button
                class="btn btn-outline"
                type="button"
                id="button-addon2"
                style={{ backgroundColor: "#D6F691" }}
              >
                lorem
              </button>
            </div>
          </div>
          <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
          <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"style={{ color: "white", textAlign: "right" }}>
            <b>LOREM IPSUM</b>
             <br />
             <br />
             <u><b>CONTACT</b></u><br/>
             loremipsum@gmail.com<br />
             +1122334455<br/>
            
            <i class="fab fa-instagram" style={{marginRight : "10px"}}></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
