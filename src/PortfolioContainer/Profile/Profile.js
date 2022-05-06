import React from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square"></i>
              </a>
              {"  "}
              <a href="https://www.google.com/">
                <i className="fa fa-google-plus-square"></i>
              </a>
              {"  "}
              <a href="https://www.instagram.com/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
              {"  "}
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube-square"></i>
              </a>
              {"  "}
              <a href="https://twitter.com/?lang=en">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Johnson</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthisiastic Dev 💎",
                    1000,
                    "Full Stack Developer 💖",
                    1000,
                    "Mern Stack Dev 🚩",
                    1000,
                    "Cross Platform Dev 😎",
                    1000,
                    "React/React Nativ Dev 🐝",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="MernTraining.pdf" download="Johnson MernTraining.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
