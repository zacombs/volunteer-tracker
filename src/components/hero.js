import React from "react";

const logo = "Leeds3-web.png";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Leeds Volunteer Tracker</h1>
    <p className="lead">
      This is an application that will track volunteers using{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://auth0.com/docs/quickstart/spa/react"
      >
        React
      </a>
    </p>
  </div>
);

export default Hero;
