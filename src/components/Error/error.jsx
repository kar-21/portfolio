import React from "react";
import "./error.css";
import errorImage from "../../assets/images/error-page.jpg";

const Error = () => {
  return (
    <div className="error-page">
      <div className="text-area">
        <h1>404</h1>
        <h2>The URL Does not Compute.</h2>
      </div>
    </div>
  );
};

export default Error;
