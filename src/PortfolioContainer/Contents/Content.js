import React from "react";
import './Content.css';

const Content = () => {
  return (
    <div>
      <div className="content-container">
        <div className="content-parent">
          <img
            src={require("../../assets/Home/bg3.png")}
            alt="Connection Error"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
