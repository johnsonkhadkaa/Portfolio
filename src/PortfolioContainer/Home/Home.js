import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Footershape from "../Footershape/Footershape";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./Home.css";
import Footer from "../Footer/Footer";

const home = () => {
  return (
    <>
     <div className="home-footer">
    <div className="home-container">
      
      <Navbar />
      <Profile /> 
      <About />
      <Contact />
      <Footershape /> 
     <Footer/>
     </div>
     </div>
     </>
     
  );
};

export default home;
