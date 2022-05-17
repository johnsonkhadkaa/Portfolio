import React from "react";
import "./Footershape.css";

const Footershape = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../assets/Home/shape-bg.png")}
          alt="Connection Error"
        />
      </div>
    </div>
  );
};

export default Footershape;
