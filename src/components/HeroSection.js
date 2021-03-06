import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="hero_img" src="/images/herosection.jpg" alt="hero_img"/>
      <h1>Where Imagination Becomes Reality</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSection;
