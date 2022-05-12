import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    
    <div className="footer-content">
      <nav className="footer-main"> 
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="footer-header">
          <span><h3>Get connected on social networks:</h3></span>
        </div>

        <div className="colz-icon">
          <a href="" className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 me-4 text-reset">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 me-4 text-reset">
            <i className="fa fa-instagram"></i>
          </a>
          <a href=""className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 me-4 text-reset">
            <i className="fa fa-twitter-square"></i>
          </a>
          {/* <a href="" className="me-4 text-reset">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-facebook-square"></i>
          </a> */}
        </div>
      </section>
      </nav>

      <section className="footer-desc">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">
                <i className=""></i>government of nepal
              </h4>
              <p>
                This section contains the footer content
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Products</h4>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Useful links</h4>
              <p>
                <a href="#!" className="text-reset">
                  Information
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Suggestions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Contact</h4>
              <p>
                <i className="fas fa-home me-3"></i> Babarmahal, Kathmandu 7707, NEPAL
              </p>
              <p>
                <i className="text-lowercase fw-bold mb-4"></i>
                doc@gov.com.np
              </p>
              <p>
                <i className="fa-solid fa-phone-volume"></i> + 977-0153661555
              </p>
              <p>
                <i className="fas fa-print me-3 me-4 text-reset"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      ><h3>
        © 2022 Copyright:</h3>
      </div>
    </div>
   
  );
};

export default Footer;
